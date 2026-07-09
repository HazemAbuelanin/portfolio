import { useState } from "react";
import { Plus, X, Trash2, GripVertical } from "lucide-react";

interface SkillCategory { title: string; skills: string[]; }

interface Props {
  skills: SkillCategory[];
  onChange: (skills: SkillCategory[]) => void;
}

export default function SkillsManager({ skills, onChange }: Props) {
  const [newCategory, setNewCategory] = useState("");
  const [skillInputs, setSkillInputs] = useState<Record<number, string>>({});

  const addCategory = () => {
    const t = newCategory.trim();
    if (!t) return;
    onChange([...skills, { title: t, skills: [] }]);
    setNewCategory("");
  };

  const removeCategory = (idx: number) => {
    if (confirm("Delete this entire skill category?"))
      onChange(skills.filter((_, i) => i !== idx));
  };

  const updateTitle = (idx: number, title: string) =>
    onChange(skills.map((c, i) => i === idx ? { ...c, title } : c));

  const addSkill = (idx: number) => {
    const val = (skillInputs[idx] ?? "").trim();
    if (!val || skills[idx].skills.includes(val)) return;
    onChange(skills.map((c, i) => i === idx ? { ...c, skills: [...c.skills, val] } : c));
    setSkillInputs(s => ({ ...s, [idx]: "" }));
  };

  const removeSkill = (catIdx: number, skill: string) =>
    onChange(skills.map((c, i) => i === catIdx ? { ...c, skills: c.skills.filter(s => s !== skill) } : c));

  // Simple move up/down for categories
  const moveCategory = (idx: number, dir: -1 | 1) => {
    const arr = [...skills];
    const target = idx + dir;
    if (target < 0 || target >= arr.length) return;
    [arr[idx], arr[target]] = [arr[target], arr[idx]];
    onChange(arr);
  };

  return (
    <div className="space-y-6">
      {/* Add Category */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-4">
        <p className="text-sm font-medium text-zinc-300 mb-3">Add New Skill Category</p>
        <div className="flex gap-2">
          <input
            className="flex-1 bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            placeholder="e.g. Cloud & DevOps"
            value={newCategory}
            onChange={e => setNewCategory(e.target.value)}
            onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addCategory())}
          />
          <button
            onClick={addCategory}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1"
          >
            <Plus size={14} /> Add
          </button>
        </div>
      </div>

      {/* Categories List */}
      {skills.map((cat, catIdx) => (
        <div key={catIdx} className="bg-zinc-800 border border-zinc-700 rounded-xl p-5">
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex flex-col gap-0.5 text-zinc-500">
              <button onClick={() => moveCategory(catIdx, -1)} disabled={catIdx === 0} className="hover:text-white disabled:opacity-20 transition-colors">▲</button>
              <button onClick={() => moveCategory(catIdx, 1)} disabled={catIdx === skills.length - 1} className="hover:text-white disabled:opacity-20 transition-colors">▼</button>
            </div>
            <input
              className="flex-1 bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-1.5 text-sm font-semibold focus:outline-none focus:border-blue-500"
              value={cat.title}
              onChange={e => updateTitle(catIdx, e.target.value)}
            />
            <button
              onClick={() => removeCategory(catIdx)}
              className="text-zinc-500 hover:text-red-400 hover:bg-red-400/10 p-1.5 rounded-lg transition-colors"
            >
              <Trash2 size={15} />
            </button>
          </div>

          {/* Skills chips */}
          <div className="flex flex-wrap gap-2 mb-3">
            {cat.skills.map(skill => (
              <span key={skill} className="flex items-center gap-1 bg-zinc-700 border border-zinc-600 text-zinc-200 text-xs px-2.5 py-1.5 rounded-full">
                {skill}
                <button onClick={() => removeSkill(catIdx, skill)} className="text-zinc-400 hover:text-red-400 transition-colors ml-0.5">
                  <X size={10} />
                </button>
              </span>
            ))}
          </div>

          {/* Add skill input */}
          <div className="flex gap-2">
            <input
              className="flex-1 bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500"
              placeholder="Add a skill..."
              value={skillInputs[catIdx] ?? ""}
              onChange={e => setSkillInputs(s => ({ ...s, [catIdx]: e.target.value }))}
              onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addSkill(catIdx))}
            />
            <button
              onClick={() => addSkill(catIdx)}
              className="bg-zinc-600 hover:bg-zinc-500 text-white px-3 py-1.5 rounded-lg text-sm transition-colors flex items-center gap-1"
            >
              <Plus size={13} /> Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
