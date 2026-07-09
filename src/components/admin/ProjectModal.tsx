import { useState, useEffect } from "react";
import { X, Plus, Trash2 } from "lucide-react";

export interface ProjectEntry {
  slug: string;
  cardTitle: string;
  title: string;
  description: string;
  skills: string[];
  status: string;
  date: string;
  featured: boolean;
  githubUrl: string;
  youtubeUrl: string;
  competitionUrl: string | null;
  images: string[];
  articleHtml: string;
}

interface Props {
  project: ProjectEntry | null;
  onSave: (p: ProjectEntry) => void;
  onClose: () => void;
}

const emptyProject: ProjectEntry = {
  slug: "",
  cardTitle: "",
  title: "",
  description: "",
  skills: [],
  status: "",
  date: new Date().getFullYear().toString(),
  featured: false,
  githubUrl: "#",
  youtubeUrl: "",
  competitionUrl: null,
  images: [],
  articleHtml: "<h3>Project Overview</h3><p>Describe your project here...</p>",
};

export default function ProjectModal({ project, onSave, onClose }: Props) {
  const [form, setForm] = useState<ProjectEntry>(project ?? { ...emptyProject });
  const [skillInput, setSkillInput] = useState("");
  const [imageInput, setImageInput] = useState("");

  useEffect(() => {
    setForm(project ?? { ...emptyProject });
    setSkillInput("");
    setImageInput("");
  }, [project]);

  const set = (key: keyof ProjectEntry, val: unknown) =>
    setForm(f => ({ ...f, [key]: val }));

  const autoSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const addSkill = () => {
    const s = skillInput.trim();
    if (s && !form.skills.includes(s)) set("skills", [...form.skills, s]);
    setSkillInput("");
  };

  const removeSkill = (s: string) => set("skills", form.skills.filter(x => x !== s));

  const addImage = () => {
    const s = imageInput.trim();
    if (s) set("images", [...form.images, s]);
    setImageInput("");
  };

  const removeImage = (i: number) => set("images", form.images.filter((_, idx) => idx !== i));

  const handleSubmit = () => {
    if (!form.slug) form.slug = autoSlug(form.cardTitle);
    onSave(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-700 sticky top-0 bg-zinc-900 z-10">
          <h2 className="text-xl font-bold text-white">
            {project ? "✏️ Edit Project" : "➕ New Project"}
          </h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Card Title */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">Card Title <span className="text-red-400">*</span></label>
            <input
              className="w-full bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              placeholder="Short title shown on homepage card"
              value={form.cardTitle}
              onChange={e => set("cardTitle", e.target.value)}
            />
          </div>

          {/* Full Title */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">Full Title (Detail Page)</label>
            <input
              className="w-full bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              placeholder="Full title with event name"
              value={form.title}
              onChange={e => set("title", e.target.value)}
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">
              URL Slug <span className="text-zinc-500 text-xs">(auto-generated if empty)</span>
            </label>
            <input
              className="w-full bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 font-mono"
              placeholder="e.g. my-robotics-project"
              value={form.slug}
              onChange={e => set("slug", e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">Short Description <span className="text-red-400">*</span></label>
            <textarea
              className="w-full bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 min-h-[80px] resize-y"
              placeholder="2-3 sentences shown on the card and detail page header"
              value={form.description}
              onChange={e => set("description", e.target.value)}
            />
          </div>

          {/* Status & Date row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Status / Award</label>
              <input
                className="w-full bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                placeholder="e.g. 2nd Place Worldwide"
                value={form.status}
                onChange={e => set("status", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Year</label>
              <input
                className="w-full bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                placeholder="2025"
                value={form.date}
                onChange={e => set("date", e.target.value)}
              />
            </div>
          </div>

          {/* Featured toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => set("featured", !form.featured)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${form.featured ? "bg-blue-600" : "bg-zinc-600"}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${form.featured ? "translate-x-6" : "translate-x-1"}`} />
            </button>
            <span className="text-sm text-zinc-300">
              {form.featured ? "⭐ Featured Project (large card on homepage)" : "More Projects section (smaller card)"}
            </span>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Skills / Technologies</label>
            <div className="flex gap-2 mb-2">
              <input
                className="flex-1 bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                placeholder="e.g. ROS 2"
                value={skillInput}
                onChange={e => setSkillInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addSkill())}
              />
              <button onClick={addSkill} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-1">
                <Plus size={14} /> Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.skills.map(s => (
                <span key={s} className="flex items-center gap-1 bg-zinc-700 text-zinc-200 text-xs px-2 py-1 rounded-full border border-zinc-600">
                  {s}
                  <button onClick={() => removeSkill(s)} className="text-zinc-400 hover:text-red-400 transition-colors ml-1">
                    <X size={10} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 gap-3">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">GitHub URL</label>
              <input
                className="w-full bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                placeholder="https://github.com/..."
                value={form.githubUrl}
                onChange={e => set("githubUrl", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">YouTube URL</label>
              <input
                className="w-full bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                placeholder="https://youtu.be/..."
                value={form.youtubeUrl}
                onChange={e => set("youtubeUrl", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Competition URL <span className="text-zinc-500 text-xs">(optional)</span></label>
              <input
                className="w-full bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                placeholder="https://competition.com/..."
                value={form.competitionUrl ?? ""}
                onChange={e => set("competitionUrl", e.target.value || null)}
              />
            </div>
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Images <span className="text-zinc-500 text-xs">(paths relative to public/, e.g. lovable-uploads/img.png)</span>
            </label>
            <div className="flex gap-2 mb-2">
              <input
                className="flex-1 bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                placeholder="lovable-uploads/my-image.png"
                value={imageInput}
                onChange={e => setImageInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addImage())}
              />
              <button onClick={addImage} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-1">
                <Plus size={14} /> Add
              </button>
            </div>
            {form.images.map((img, i) => (
              <div key={i} className="flex items-center gap-2 bg-zinc-800 rounded-lg px-3 py-2 mb-1 text-sm text-zinc-300">
                <span className="flex-1 font-mono text-xs truncate">{img}</span>
                <button onClick={() => removeImage(i)} className="text-red-400 hover:text-red-300 transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>

          {/* Article HTML */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">
              Article Content <span className="text-zinc-500 text-xs">(HTML — use &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;)</span>
            </label>
            <textarea
              className="w-full bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 min-h-[200px] resize-y font-mono"
              placeholder="<h3>Overview</h3><p>Your story here...</p>"
              value={form.articleHtml}
              onChange={e => set("articleHtml", e.target.value)}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-zinc-700 sticky bottom-0 bg-zinc-900">
          <button
            onClick={onClose}
            className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white py-2.5 rounded-xl font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-bold transition-colors"
          >
            {project ? "💾 Save Changes" : "➕ Add Project"}
          </button>
        </div>
      </div>
    </div>
  );
}
