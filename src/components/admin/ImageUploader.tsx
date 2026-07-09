import { useState, useRef, useCallback, useEffect } from "react";
import { Upload, X, ImageIcon, Loader2, CheckCircle, AlertCircle, Move, ZoomIn } from "lucide-react";

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

// Helper to convert dataURL/Blob back to File
function blobToFile(blob: Blob, fileName: string): File {
  return new File([blob], fileName, { type: blob.type });
}

// Upload a single File to the local Vite dev server endpoint
async function uploadToLocal(file: File): Promise<string> {
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

// Read file as dataUrl
function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Convert base64 from dataURL
function getBase64FromDataUrl(dataUrl: string): string {
  return dataUrl.split(",")[1];
}

// ─────────────────────────────────────────────────────────────────────────────
// CROP MODAL COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
interface CropModalProps {
  imageSrc: string;
  fileName: string;
  isSquare: boolean; // true = 1:1 circle/square (profile), false = 16:9 (projects)
  onCrop: (croppedFile: File, croppedPreviewUrl: string) => void;
  onCancel: () => void;
  onSkip: () => void;
}

function CropModal({ imageSrc, fileName, isSquare, onCrop, onCancel, onSkip }: CropModalProps) {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  // Box dimensions in UI
  const W_b = 320;
  const H_b = isSquare ? 320 : 180;

  // Reset positioning when image source changes
  useEffect(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, [imageSrc]);

  // Calculate baseline cover size
  const getCoverLayout = () => {
    if (!imageRef.current) return { w: W_b, h: H_b, baseW: W_b, baseH: H_b };
    const W_n = imageRef.current.naturalWidth;
    const H_n = imageRef.current.naturalHeight;

    const fitScale = Math.max(W_b / W_n, H_b / H_n);
    const baseW = W_n * fitScale;
    const baseH = H_n * fitScale;

    const w = baseW * zoom;
    const h = baseH * zoom;

    // Bounds checking
    const maxOffsetK_X = (w - W_b) / 2;
    const maxOffsetK_Y = (h - H_b) / 2;

    const x = Math.min(Math.max(offset.x, -maxOffsetK_X), maxOffsetK_X);
    const y = Math.min(Math.max(offset.y, -maxOffsetK_Y), maxOffsetK_Y);

    return { w, h, baseW, baseH, x, y };
  };

  const layout = getCoverLayout();

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.current.x;
    const newY = e.clientY - dragStart.current.y;
    setOffset({ x: newX, y: newY });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.touches[0].clientX - offset.x, y: e.touches[0].clientY - offset.y };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const newX = e.touches[0].clientX - dragStart.current.x;
    const newY = e.touches[0].clientY - dragStart.current.y;
    setOffset({ x: newX, y: newY });
  };

  const handleApply = () => {
    if (!imageRef.current) return;
    const img = imageRef.current;

    // Setup canvas
    const canvas = document.createElement("canvas");
    const W_canvas = isSquare ? 500 : 960;
    const H_canvas = isSquare ? 500 : 540;
    canvas.width = W_canvas;
    canvas.height = H_canvas;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    // Draw background (optional: dark slate if any spacing)
    ctx.fillStyle = "#18181b";
    ctx.fillRect(0, 0, W_canvas, H_canvas);

    // Calculate canvas coordinates based on offset & zoom
    const ratio = W_canvas / W_b;
    const dw = layout.w * ratio;
    const dh = layout.h * ratio;
    const dx = (W_canvas - dw) / 2 + layout.x * ratio;
    const dy = (H_canvas - dh) / 2 + layout.y * ratio;

    // Draw the image
    ctx.drawImage(img, dx, dy, dw, dh);

    // Convert to blob and save
    canvas.toBlob(blob => {
      if (!blob) return;
      const croppedFile = blobToFile(blob, fileName);
      const croppedPreviewUrl = URL.createObjectURL(blob);
      onCrop(croppedFile, croppedPreviewUrl);
    }, "image/jpeg", 0.9);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-zinc-800 flex justify-between items-center">
          <div>
            <h3 className="text-white font-bold text-base">🖼️ Resize & Position</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Drag to adjust framing inside the box</p>
          </div>
          <button onClick={onCancel} className="text-zinc-500 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Crop Window Container */}
        <div className="flex-1 flex items-center justify-center p-8 bg-zinc-950 min-h-[360px] relative select-none">
          <div
            className={`relative overflow-hidden border border-zinc-700 shadow-xl bg-zinc-900 ${
              isSquare ? "rounded-full aspect-square" : "rounded-lg aspect-video"
            }`}
            style={{ width: `${W_b}px`, height: `${H_b}px` }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            <img
              ref={imageRef}
              src={imageSrc}
              alt="Crop preview"
              className="absolute pointer-events-none max-w-none origin-center"
              style={{
                width: `${layout.w}px`,
                height: `${layout.h}px`,
                left: `50%`,
                top: `50%`,
                transform: `translate(-50%, -50%) translate(${layout.x}px, ${layout.y}px)`,
                cursor: isDragging ? "grabbing" : "grab"
              }}
            />
            {/* Guide overlay */}
            <div className="absolute inset-0 border-2 border-dashed border-blue-500/30 pointer-events-none rounded-inherit flex items-center justify-center">
              <Move size={24} className="text-white/20" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="p-5 border-t border-zinc-800 space-y-4 bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <ZoomIn size={16} className="text-zinc-400" />
            <input
              type="range"
              min="1"
              max="3"
              step="0.01"
              value={zoom}
              onChange={e => setZoom(parseFloat(e.target.value))}
              className="flex-1 h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <span className="text-xs text-zinc-400 font-mono w-8 text-right">{(zoom * 100).toFixed(0)}%</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={onSkip}
              className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 py-2.5 rounded-xl font-medium transition-colors text-sm"
            >
              Use Original
            </button>
            <button
              onClick={handleApply}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-bold transition-colors text-sm"
            >
              Apply Crop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN IMAGE UPLOADER COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function ImageUploader({
  images,
  onImagesChange,
  onPendingFiles,
  single = false,
  label = "Images",
  accept = "image/*",
}: Props) {
  const [entries, setEntries] = useState<ImageEntry[]>(() =>
    images.map(path => ({ path, pending: false, uploadState: "idle" as UploadState }))
  );
  const [pendingFiles, setPendingFiles] = useState<PendingFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Crop flow state
  const [cropTarget, setCropTarget] = useState<{
    file: File;
    src: string;
  } | null>(null);

  const syncPaths = useCallback((updated: ImageEntry[]) => {
    onImagesChange(updated.map(e => e.path));
  }, [onImagesChange]);

  const syncPending = useCallback((updated: PendingFile[]) => {
    onPendingFiles?.(updated);
  }, [onPendingFiles]);

  // Actual upload runner
  const handleFinalProcessedFile = useCallback(async (file: File, previewUrl: string) => {
    const base64 = getBase64FromDataUrl(await readFileAsDataUrl(file));
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

    try {
      const savedPath = await uploadToLocal(file);
      setEntries(prev => prev.map(e =>
        e.path === tempPath
          ? { ...e, path: savedPath, pending: false, uploadState: "ok" }
          : e
      ));
      setPendingFiles(prev => prev.map(p =>
        p.publicPath === tempPath ? { ...p, publicPath: savedPath } : p
      ));
    } catch {
      setEntries(prev => prev.map(e =>
        e.path === tempPath
          ? { ...e, uploadState: "err", errorMsg: "Upload queued for deploy" }
          : e
      ));
    }
  }, [single, syncPaths, syncPending]);

  // Invoked when file is dropped/chosen
  const processFile = useCallback(async (file: File) => {
    if (single && entries.length >= 1) return;

    // Check if it's an image. If not (e.g. PDF), bypass cropping
    if (!file.type.startsWith("image/")) {
      const pUrl = URL.createObjectURL(file);
      handleFinalProcessedFile(file, pUrl);
      return;
    }

    // Load visual crop tool
    const src = await readFileAsDataUrl(file);
    setCropTarget({ file, src });
  }, [entries.length, single, handleFinalProcessedFile]);

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

      {/* Visual Crop Modal */}
      {cropTarget && (
        <CropModal
          imageSrc={cropTarget.src}
          fileName={cropTarget.file.name}
          isSquare={single} // 1:1 circle/square for profile pictures
          onCancel={() => setCropTarget(null)}
          onSkip={() => {
            const pUrl = URL.createObjectURL(cropTarget.file);
            handleFinalProcessedFile(cropTarget.file, pUrl);
            setCropTarget(null);
          }}
          onCrop={(croppedFile, croppedPreviewUrl) => {
            handleFinalProcessedFile(croppedFile, croppedPreviewUrl);
            setCropTarget(null);
          }}
        />
      )}
    </div>
  );
}
