import { useState } from "react";
import { GripVertical, Pencil, Trash2, Plus, Star, ChevronUp, ChevronDown } from "lucide-react";
import ProjectModal, { type ProjectEntry } from "./ProjectModal";

interface Props {
  projects: ProjectEntry[];
  onChange: (projects: ProjectEntry[]) => void;
}

export default function ProjectsManager({ projects, onChange }: Props) {
  const [editing, setEditing] = useState<ProjectEntry | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [draggingIdx, setDraggingIdx] = useState<number | null>(null);
  const [overIdx, setOverIdx] = useState<number | null>(null);

  const openNew = () => { setEditing(null); setIsNew(true); };
  const openEdit = (p: ProjectEntry) => { setEditing(p); setIsNew(false); };
  const closeModal = () => { setEditing(null); setIsNew(false); };

  const saveProject = (p: ProjectEntry) => {
    if (isNew) {
      onChange([...projects, p]);
    } else {
      onChange(projects.map(x => x.slug === p.slug ? p : x));
    }
    closeModal();
  };

  const deleteProject = (slug: string) => {
    if (confirm("Delete this project? This cannot be undone.")) {
      onChange(projects.filter(p => p.slug !== slug));
    }
  };

  const toggleFeatured = (slug: string) => {
    onChange(projects.map(p => p.slug === slug ? { ...p, featured: !p.featured } : p));
  };

  const moveUp = (idx: number) => {
    if (idx === 0) return;
    const arr = [...projects];
    [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
    onChange(arr);
  };

  const moveDown = (idx: number) => {
    if (idx === projects.length - 1) return;
    const arr = [...projects];
    [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
    onChange(arr);
  };

  // Drag & drop
  const onDragStart = (idx: number) => setDraggingIdx(idx);
  const onDragOver = (e: React.DragEvent, idx: number) => { e.preventDefault(); setOverIdx(idx); };
  const onDrop = (idx: number) => {
    if (draggingIdx === null || draggingIdx === idx) { setDraggingIdx(null); setOverIdx(null); return; }
    const arr = [...projects];
    const [moved] = arr.splice(draggingIdx, 1);
    arr.splice(idx, 0, moved);
    onChange(arr);
    setDraggingIdx(null);
    setOverIdx(null);
  };

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-zinc-400 text-sm">Drag rows to reorder • Toggle ⭐ to feature • Click ✏️ to edit</p>
          </div>
          <button
            onClick={openNew}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors"
          >
            <Plus size={16} /> Add Project
          </button>
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12 text-zinc-500 border-2 border-dashed border-zinc-700 rounded-xl">
            No projects yet. Click "Add Project" to get started.
          </div>
        )}

        {projects.map((p, idx) => (
          <div
            key={p.slug}
            draggable
            onDragStart={() => onDragStart(idx)}
            onDragOver={e => onDragOver(e, idx)}
            onDrop={() => onDrop(idx)}
            onDragEnd={() => { setDraggingIdx(null); setOverIdx(null); }}
            className={`flex items-center gap-3 bg-zinc-800 border rounded-xl px-4 py-3 transition-all duration-150 group ${
              overIdx === idx && draggingIdx !== idx
                ? "border-blue-500 bg-zinc-700"
                : draggingIdx === idx
                ? "border-blue-400 opacity-50"
                : "border-zinc-700 hover:border-zinc-600"
            }`}
          >
            {/* Drag handle */}
            <div className="cursor-grab active:cursor-grabbing text-zinc-500 hover:text-zinc-300 touch-none">
              <GripVertical size={18} />
            </div>

            {/* Order buttons */}
            <div className="flex flex-col gap-0.5">
              <button onClick={() => moveUp(idx)} disabled={idx === 0} className="text-zinc-500 hover:text-white disabled:opacity-20 transition-colors">
                <ChevronUp size={14} />
              </button>
              <button onClick={() => moveDown(idx)} disabled={idx === projects.length - 1} className="text-zinc-500 hover:text-white disabled:opacity-20 transition-colors">
                <ChevronDown size={14} />
              </button>
            </div>

            {/* Position badge */}
            <span className="text-xs font-mono text-zinc-500 w-5 text-center">{idx + 1}</span>

            {/* Project info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-white font-medium text-sm truncate">{p.cardTitle}</span>
                {p.featured && (
                  <span className="text-xs bg-blue-600/30 text-blue-300 border border-blue-600/50 px-1.5 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 mt-0.5">
                <span className="text-zinc-400 text-xs">{p.date}</span>
                <span className="text-zinc-500 text-xs">•</span>
                <span className="text-zinc-400 text-xs">{p.status}</span>
                <span className="text-zinc-500 text-xs">•</span>
                <span className="text-zinc-500 text-xs font-mono">{p.slug}</span>
              </div>
            </div>

            {/* Skill count */}
            <span className="text-zinc-500 text-xs hidden sm:block">{p.skills.length} skills</span>

            {/* Actions */}
            <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => toggleFeatured(p.slug)}
                title={p.featured ? "Unfeature" : "Feature"}
                className={`p-1.5 rounded-lg transition-colors ${p.featured ? "text-yellow-400 hover:text-yellow-300 bg-yellow-400/10" : "text-zinc-500 hover:text-yellow-400 hover:bg-yellow-400/10"}`}
              >
                <Star size={15} fill={p.featured ? "currentColor" : "none"} />
              </button>
              <button
                onClick={() => openEdit(p)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-blue-400 hover:bg-blue-400/10 transition-colors"
              >
                <Pencil size={15} />
              </button>
              <button
                onClick={() => deleteProject(p.slug)}
                className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-400/10 transition-colors"
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {(isNew || editing) && (
        <ProjectModal
          project={isNew ? null : editing}
          onSave={saveProject}
          onClose={closeModal}
        />
      )}
    </>
  );
}
