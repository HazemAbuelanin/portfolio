import { useState } from "react";
import { Plus, X } from "lucide-react";

interface Profile {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  profileImage: string;
  resumePath: string;
  aboutParagraphs: string[];
  goals: string;
  interests: string[];
}

interface Props {
  profile: Profile;
  onChange: (profile: Profile) => void;
}

export default function ProfileManager({ profile, onChange }: Props) {
  const [interestInput, setInterestInput] = useState("");

  const set = (key: keyof Profile, val: unknown) =>
    onChange({ ...profile, [key]: val });

  const addInterest = () => {
    const v = interestInput.trim();
    if (v && !profile.interests.includes(v)) set("interests", [...profile.interests, v]);
    setInterestInput("");
  };

  const removeInterest = (i: string) =>
    set("interests", profile.interests.filter(x => x !== i));

  const updateParagraph = (idx: number, val: string) => {
    const arr = [...profile.aboutParagraphs];
    arr[idx] = val;
    set("aboutParagraphs", arr);
  };

  const addParagraph = () =>
    set("aboutParagraphs", [...profile.aboutParagraphs, ""]);

  const removeParagraph = (idx: number) =>
    set("aboutParagraphs", profile.aboutParagraphs.filter((_, i) => i !== idx));

  return (
    <div className="space-y-6">
      {/* Basic Identity */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5">
        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">🪪 Identity</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Full Name</label>
            <input className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              value={profile.name} onChange={e => set("name", e.target.value)} />
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Role / Title</label>
            <input className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              value={profile.role} onChange={e => set("role", e.target.value)} />
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Profile Image Path <span className="text-zinc-500">(relative to public/)</span></label>
            <input className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 font-mono"
              placeholder="lovable-uploads/your-photo.png"
              value={profile.profileImage} onChange={e => set("profileImage", e.target.value)} />
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Resume PDF Path <span className="text-zinc-500">(relative to public/)</span></label>
            <input className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 font-mono"
              placeholder="hazem-abuelanin-resume.pdf"
              value={profile.resumePath} onChange={e => set("resumePath", e.target.value)} />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-xs text-zinc-400 mb-1">Hero Bio (1-2 sentences on front page)</label>
          <textarea className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-y min-h-[60px]"
            value={profile.bio} onChange={e => set("bio", e.target.value)} />
        </div>
      </div>

      {/* Contact & Links */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5">
        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">🔗 Contact & Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Email</label>
            <input className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="email" value={profile.email} onChange={e => set("email", e.target.value)} />
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1">GitHub URL</label>
            <input className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              value={profile.github} onChange={e => set("github", e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs text-zinc-400 mb-1">LinkedIn URL</label>
            <input className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              value={profile.linkedin} onChange={e => set("linkedin", e.target.value)} />
          </div>
        </div>
      </div>

      {/* About Paragraphs */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider">📝 About Me Paragraphs</h3>
          <button onClick={addParagraph} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
            <Plus size={12} /> Add Paragraph
          </button>
        </div>
        <div className="space-y-3">
          {profile.aboutParagraphs.map((p, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-zinc-500">Paragraph {idx + 1} <span className="text-zinc-600">(HTML allowed)</span></span>
                <button onClick={() => removeParagraph(idx)} className="text-red-400 hover:text-red-300 ml-auto transition-colors">
                  <X size={12} />
                </button>
              </div>
              <textarea
                className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-y min-h-[80px] font-mono leading-relaxed"
                value={p}
                onChange={e => updateParagraph(idx, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Goals */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5">
        <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">🎯 Goals Card</h3>
        <textarea
          className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-y min-h-[80px]"
          value={profile.goals}
          onChange={e => set("goals", e.target.value)}
        />
      </div>

      {/* Interests */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5">
        <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">❤️ Interests</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {profile.interests.map(item => (
            <span key={item} className="flex items-center gap-1 bg-zinc-700 border border-zinc-600 text-zinc-200 text-xs px-2.5 py-1.5 rounded-full">
              {item}
              <button onClick={() => removeInterest(item)} className="text-zinc-400 hover:text-red-400 ml-0.5 transition-colors">
                <X size={10} />
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            className="flex-1 bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500"
            placeholder="Add an interest..."
            value={interestInput}
            onChange={e => setInterestInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addInterest())}
          />
          <button
            onClick={addInterest}
            className="bg-zinc-600 hover:bg-zinc-500 text-white px-3 py-1.5 rounded-lg text-sm transition-colors flex items-center gap-1"
          >
            <Plus size={13} /> Add
          </button>
        </div>
      </div>
    </div>
  );
}
