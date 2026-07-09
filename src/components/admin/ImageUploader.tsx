import { useState, useRef, useCallback } from "react";
import { Upload, X, ImageIcon, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export interface PendingFile {
  name: string;
  dataBase64: string;   // raw base64 (no prefix) — for GitHub API
  mimeType: string;
  previewUrl: string;   // object URL for preview
  publicPath: string;   // "lovable-uploads/name.ext" — stored in portfolioData.json
}

interface Props {
  images: string[];                          // current paths from portfolioData.json
  onImagesChange: (paths: string[]) => void;
  onPendingFiles?: (files: PendingFile[]) => void;
  single?: boolean;                          // restrict to 1 image (profile pic)
  label?: string;
  accept?: string;                           // e.g. "image/*" or "image/*,.pdf"
}

type UploadState = "idle" | "uploading" | "ok" | "err";

interface ImageEntry {
  path: string;         // final path stored in JSON
  previewUrl?: string;  // set only for newly dropped files (object URL)
  pending: boolean;     // true = not yet saved to disk/GitHub
  uploadState: UploadState;
  errorMsg?: string;
}

// Upload a single File to the local Vite dev server endpoint
async function uploadToLocal(file: File): Promise<string> {
  const ext = file.name.split(".").pop() ?? "bin";
  const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const res = await fetch("/api/upload-media", {
    method: "POST",
    headers: {
      "X-Filename": safe,
      "Content-Type": file.type || "application/octet-stream",
    },
    body: file,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  const json = await res.json() as { path: string };
  return json.path; // "lovable-uploads/filename.png"
}

// Read file as base64 for GitHub API upload
function readAsBase64(file: File): Promise<{ base64: string; previewUrl: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const base64 = dataUrl.split(",")[1];
      resolve({ base64, previewUrl: dataUrl });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function ImageUploader({
  images,
  onImagesChange,
  onPendingFiles,
  single = false,
  label = "Images",
  accept = "image/*",
}: Props) {
  // Initialize entries from existing paths
  const [entries, setEntries] = useState<ImageEntry[]>(() =>
    images.map(path => ({ path, pending: false, uploadState: "idle" as UploadState }))
  );
  const [pendingFiles, setPendingFiles] = useState<PendingFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const syncPaths = useCallback((updated: ImageEntry[]) => {
    onImagesChange(updated.map(e => e.path));
  }, [onImagesChange]);

  const syncPending = useCallback((updated: PendingFile[]) => {
    onPendingFiles?.(updated);
  }, [onPendingFiles]);

  const processFile = useCallback(async (file: File) => {
    if (single && entries.length >= 1) return; // enforce single mode

    // Immediately read for preview + base64
    const { base64, previewUrl } = await readAsBase64(file);

    const tempPath = `lovable-uploads/${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;

    const newEntry: ImageEntry = {
      path: tempPath,
      previewUrl,
      pending: true,
      uploadState: "uploading",
    };

    setEntries(prev => {
      const updated = single ? [newEntry] : [...prev, newEntry];
      syncPaths(updated);
      return updated;
    });

    // Track pending file for GitHub deploy
    const pf: PendingFile = {
      name: file.name.replace(/[^a-zA-Z0-9._-]/g, "_"),
      dataBase64: base64,
      mimeType: file.type,
      previewUrl,
      publicPath: tempPath,
    };
    setPendingFiles(prev => {
      const updated = single ? [pf] : [...prev, pf];
      syncPending(updated);
      return updated;
    });

    // Try local upload
    try {
      const savedPath = await uploadToLocal(file);
      setEntries(prev => prev.map(e =>
        e.path === tempPath
          ? { ...e, path: savedPath, pending: false, uploadState: "ok" }
          : e
      ));
      // Update pending files with final path
      setPendingFiles(prev => prev.map(p =>
        p.publicPath === tempPath ? { ...p, publicPath: savedPath } : p
      ));
    } catch {
      // Local API not available (live site) — keep as pending
      setEntries(prev => prev.map(e =>
        e.path === tempPath
          ? { ...e, uploadState: "err", errorMsg: "Not on dev server — will upload via GitHub" }
          : e
      ));
    }
  }, [entries.length, single, syncPaths, syncPending]);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach(processFile);
  }, [processFile]);

  const removeEntry = (path: string) => {
    setEntries(prev => {
      const updated = prev.filter(e => e.path !== path);
      syncPaths(updated);
      return updated;
    });
    setPendingFiles(prev => {
      const updated = prev.filter(p => p.publicPath !== path);
      syncPending(updated);
      return updated;
    });
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const statusIcon = (s: UploadState) => {
    if (s === "uploading") return <Loader2 size={12} className="animate-spin text-blue-400" />;
    if (s === "ok") return <CheckCircle size={12} className="text-green-400" />;
    if (s === "err") return <AlertCircle size={12} className="text-yellow-400" />;
    return null;
  };

  const canAddMore = !single || entries.length === 0;

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-zinc-300">{label}</label>

      {/* Drop Zone */}
      {canAddMore && (
        <div
          onDragOver={e => { e.preventDefault(); setIsDragOver(true); }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 ${
            isDragOver
              ? "border-blue-500 bg-blue-500/10 scale-[1.01]"
              : "border-zinc-600 hover:border-zinc-400 hover:bg-zinc-800/50"
          }`}
        >
          <Upload className="mx-auto mb-2 text-zinc-400" size={24} />
          <p className="text-sm text-zinc-300 font-medium">
            {isDragOver ? "Drop to upload!" : "Drag & drop or click to browse"}
          </p>
          <p className="text-xs text-zinc-500 mt-1">
            {accept === "image/*" ? "PNG, JPG, GIF, WebP, SVG" : accept}
            {single ? " — one file only" : " — multiple allowed"}
          </p>
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={!single}
            className="hidden"
            onChange={e => handleFiles(e.target.files)}
          />
        </div>
      )}

      {/* Preview Grid */}
      {entries.length > 0 && (
        <div className={`grid gap-3 ${single ? "grid-cols-1 max-w-xs" : "grid-cols-2 sm:grid-cols-3"}`}>
          {entries.map((entry, idx) => (
            <div key={idx} className="relative group rounded-xl overflow-hidden border border-zinc-700 bg-zinc-800 aspect-video">
              {entry.previewUrl ? (
                <img src={entry.previewUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <img
                  src={`${import.meta.env.BASE_URL}${entry.path}`}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={e => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}

              {/* Status badge */}
              <div className="absolute top-1.5 left-1.5 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-1.5 py-0.5">
                {statusIcon(entry.uploadState)}
                {entry.pending && <span className="text-[10px] text-yellow-300">pending</span>}
              </div>

              {/* Filename */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[10px] text-zinc-300 font-mono truncate">{entry.path.split("/").pop()}</p>
              </div>

              {/* Remove button */}
              <button
                onClick={e => { e.stopPropagation(); removeEntry(entry.path); }}
                className="absolute top-1.5 right-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={12} />
              </button>

              {/* Fallback icon for broken images */}
              <div className="absolute inset-0 flex items-center justify-center text-zinc-600 pointer-events-none" style={{ zIndex: -1 }}>
                <ImageIcon size={32} />
              </div>
            </div>
          ))}
        </div>
      )}

      {entries.some(e => e.uploadState === "err") && (
        <p className="text-xs text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 rounded-lg px-3 py-2">
          ⚠️ Some files couldn't be saved locally (you're on the live site). They will be uploaded to GitHub when you click "Commit & Deploy".
        </p>
      )}
    </div>
  );
}
