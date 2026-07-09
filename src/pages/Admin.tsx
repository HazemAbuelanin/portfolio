import { useState, useCallback } from "react";
import {
  Lock, LogOut, Save, Github, FolderKanban,
  Code2, User, CheckCircle, AlertCircle, Loader2, Eye
} from "lucide-react";
import initialData from "@/data/portfolioData.json";
import ProjectsManager from "@/components/admin/ProjectsManager";
import SkillsManager from "@/components/admin/SkillsManager";
import ProfileManager from "@/components/admin/ProfileManager";
import type { ProjectEntry } from "@/components/admin/ProjectModal";
import type { PendingFile } from "@/components/admin/ImageUploader";

// ─── CHANGE YOUR PIN HERE ─────────────────────────────────────────
const ADMIN_PIN = "2402";
// ──────────────────────────────────────────────────────────────────

type Tab = "projects" | "skills" | "profile" | "deploy";

type PortfolioData = typeof initialData & {
  projects: ProjectEntry[];
};

export default function Admin() {
  // ── Auth ──────────────────────────────────────────────────────────
  const [unlocked, setUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);

  const tryUnlock = () => {
    if (pinInput === ADMIN_PIN) {
      setUnlocked(true);
      setPinError(false);
    } else {
      setPinError(true);
      setPinInput("");
      setTimeout(() => setPinError(false), 1500);
    }
  };

  // ── Data state ────────────────────────────────────────────────────
  const [data, setData] = useState<PortfolioData>(initialData as PortfolioData);
  const [tab, setTab] = useState<Tab>("projects");
  const [pendingUploads, setPendingUploads] = useState<PendingFile[]>([]);

  const mergePending = (files: PendingFile[]) =>
    setPendingUploads(prev => {
      const map = new Map(prev.map(f => [f.publicPath, f]));
      files.forEach(f => map.set(f.publicPath, f));
      return [...map.values()];
    });

  const updateProjects = useCallback((p: ProjectEntry[]) =>
    setData(d => ({ ...d, projects: p })), []);
  const updateSkills = useCallback((s: PortfolioData["skills"]) =>
    setData(d => ({ ...d, skills: s })), []);
  const updateProfile = useCallback((p: PortfolioData["profile"]) =>
    setData(d => ({ ...d, profile: p })), []);

  // ── Save state ────────────────────────────────────────────────────
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "ok" | "err">("idle");
  const [saveMsg, setSaveMsg] = useState("");

  // ── GitHub deploy state ───────────────────────────────────────────
  const [ghToken, setGhToken] = useState(() => localStorage.getItem("admin_gh_token") ?? "");
  const [ghOwner, setGhOwner] = useState(() => localStorage.getItem("admin_gh_owner") ?? "HazemAbuelanin");
  const [ghRepo, setGhRepo]   = useState(() => localStorage.getItem("admin_gh_repo")  ?? "portfolio");
  const [ghBranch, setGhBranch] = useState(() => localStorage.getItem("admin_gh_branch") ?? "main");
  const [deployStatus, setDeployStatus] = useState<"idle" | "saving" | "ok" | "err">("idle");
  const [deployMsg, setDeployMsg] = useState("");

  const jsonPayload = JSON.stringify(data, null, 2);

  // ── Local save (Vite dev server endpoint) ─────────────────────────
  const saveLocal = async () => {
    setSaveStatus("saving");
    try {
      const res = await fetch("/api/save-portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonPayload,
      });
      if (!res.ok) throw new Error(await res.text());
      setSaveStatus("ok");
      setSaveMsg("Saved to src/data/portfolioData.json ✓");
    } catch (e: unknown) {
      setSaveStatus("err");
      const msg = e instanceof Error ? e.message : String(e);
      setSaveMsg(msg.includes("Failed to fetch")
        ? "Only works on localhost (npm run dev)."
        : msg);
    }
    setTimeout(() => setSaveStatus("idle"), 4000);
  };

  // ── GitHub API helpers ────────────────────────────────────────────
  const getFileSha = async (apiUrl: string, headers: Record<string, string>, ref: string): Promise<string> => {
    const r = await fetch(`${apiUrl}?ref=${ref}`, { headers });
    if (!r.ok) throw new Error(`Cannot fetch file SHA: ${r.status} ${await r.text()}`);
    const { sha } = await r.json() as { sha: string };
    return sha;
  };

  const putGitHubFile = async (
    filePath: string,
    contentBase64: string,
    sha: string | null,
    message: string,
    headers: Record<string, string>
  ): Promise<void> => {
    const apiUrl = `https://api.github.com/repos/${ghOwner}/${ghRepo}/contents/${filePath}`;
    const body: Record<string, unknown> = { message, content: contentBase64, branch: ghBranch };
    if (sha) body.sha = sha;
    const res = await fetch(apiUrl, { method: "PUT", headers, body: JSON.stringify(body) });
    if (!res.ok) throw new Error(`PUT ${filePath} failed: ${res.status} ${await res.text()}`);
  };

  // ── GitHub API deploy ─────────────────────────────────────────────
  const deployGitHub = async () => {
    if (!ghToken || !ghOwner || !ghRepo) {
      setDeployStatus("err");
      setDeployMsg("Fill in Token, Owner, and Repo first.");
      return;
    }
    localStorage.setItem("admin_gh_token",  ghToken);
    localStorage.setItem("admin_gh_owner",  ghOwner);
    localStorage.setItem("admin_gh_repo",   ghRepo);
    localStorage.setItem("admin_gh_branch", ghBranch);

    setDeployStatus("saving");

    const headers = {
      Authorization: `Bearer ${ghToken}`,
      "Content-Type": "application/json",
      Accept: "application/vnd.github+json",
    };

    try {
      // 1. Upload any pending image files first
      const stillPending = pendingUploads.filter(f => f.dataBase64);
      if (stillPending.length) {
        setDeployMsg(`Uploading ${stillPending.length} image(s) to GitHub...`);
        for (const file of stillPending) {
          const imgApiBase = `https://api.github.com/repos/${ghOwner}/${ghRepo}/contents/public/${file.publicPath}`;
          // Try to get existing SHA (file may already exist)
          let existingSha: string | null = null;
          try {
            const r = await fetch(`${imgApiBase}?ref=${ghBranch}`, { headers });
            if (r.ok) { const j = await r.json() as { sha: string }; existingSha = j.sha; }
          } catch { /* new file, no SHA needed */ }
          await putGitHubFile(
            `public/${file.publicPath}`,
            file.dataBase64,
            existingSha,
            `Upload image: ${file.name}`,
            headers
          );
        }
        setPendingUploads([]);
      }

      // 2. Commit portfolioData.json
      setDeployMsg("Committing portfolio data...");
      const jsonApiBase = `https://api.github.com/repos/${ghOwner}/${ghRepo}/contents/src/data/portfolioData.json`;
      const sha = await getFileSha(jsonApiBase, headers, ghBranch);
      const content = btoa(unescape(encodeURIComponent(jsonPayload)));
      await putGitHubFile("src/data/portfolioData.json", content, sha, "Portfolio update via Admin Dashboard", headers);

      setDeployStatus("ok");
      setDeployMsg(`Done! ${stillPending.length} image(s) uploaded. GitHub Actions is rebuilding your site (~60 sec).`);
    } catch (e: unknown) {
      setDeployStatus("err");
      setDeployMsg(e instanceof Error ? e.message : String(e));
    }
    setTimeout(() => setDeployStatus("idle"), 8000);
  };

  // ─────────────────────────────────────────────────────────────────
  // PIN LOCK SCREEN
  // ─────────────────────────────────────────────────────────────────
  if (!unlocked) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
        <div className={`bg-zinc-900 border rounded-2xl p-8 w-full max-w-sm shadow-2xl text-center transition-all duration-300 ${pinError ? "border-red-500 animate-shake" : "border-zinc-700"}`}>
          <div className="w-16 h-16 bg-blue-600/20 border border-blue-600/40 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="text-blue-400" size={28} />
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Admin Dashboard</h1>
          <p className="text-zinc-500 text-sm mb-8">Enter your PIN to continue</p>

          <input
            type="password"
            maxLength={8}
            className={`w-full text-center text-2xl tracking-[0.5em] bg-zinc-800 border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors mb-4 ${pinError ? "border-red-500" : "border-zinc-600 focus:border-blue-500"}`}
            placeholder="••••"
            value={pinInput}
            onChange={e => setPinInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && tryUnlock()}
            autoFocus
          />

          {pinError && (
            <p className="text-red-400 text-sm mb-4">Incorrect PIN. Try again.</p>
          )}

          <button
            onClick={tryUnlock}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors"
          >
            Unlock
          </button>
          <p className="text-zinc-600 text-xs mt-4">
            This page is only visible to you.<br/>Visitors cannot see or access /admin.
          </p>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────
  // ADMIN DASHBOARD
  // ─────────────────────────────────────────────────────────────────
  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "projects", label: "Projects", icon: <FolderKanban size={16} /> },
    { id: "skills",   label: "Skills",   icon: <Code2 size={16} /> },
    { id: "profile",  label: "Profile",  icon: <User size={16} /> },
    { id: "deploy",   label: "Save & Deploy", icon: <Github size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Top Bar */}
      <header className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Lock size={14} className="text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-sm">Portfolio Admin</h1>
            <p className="text-zinc-500 text-xs">Private dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Quick local save */}
          <button
            onClick={saveLocal}
            disabled={saveStatus === "saving"}
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-60"
          >
            {saveStatus === "saving" ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
            {saveStatus === "ok" ? "Saved!" : saveStatus === "err" ? "Error" : "Save Locally"}
          </button>

          {/* Preview site */}
          <a
            href="/"
            target="_blank"
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg text-sm transition-colors"
          >
            <Eye size={14} /> Preview Site
          </a>

          {/* Lock */}
          <button
            onClick={() => { setUnlocked(false); setPinInput(""); }}
            className="flex items-center gap-1.5 text-zinc-500 hover:text-red-400 px-2 py-1.5 rounded-lg hover:bg-zinc-800 transition-colors text-sm"
          >
            <LogOut size={14} /> Lock
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Save status banner */}
        {saveStatus !== "idle" && (
          <div className={`flex items-center gap-2 px-4 py-3 rounded-xl mb-6 text-sm font-medium ${
            saveStatus === "ok" ? "bg-green-600/20 border border-green-600/40 text-green-300"
            : saveStatus === "err" ? "bg-red-600/20 border border-red-600/40 text-red-300"
            : "bg-blue-600/20 border border-blue-600/40 text-blue-300"
          }`}>
            {saveStatus === "ok" && <CheckCircle size={16} />}
            {saveStatus === "err" && <AlertCircle size={16} />}
            {saveStatus === "saving" && <Loader2 size={16} className="animate-spin" />}
            {saveMsg}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 bg-zinc-900 border border-zinc-800 rounded-xl p-1 mb-8">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 flex-1 justify-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                tab === t.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {t.icon} <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {tab === "projects" && (
          <ProjectsManager
            projects={data.projects as ProjectEntry[]}
            onChange={updateProjects}
            onPendingFiles={mergePending}
          />
        )}

        {tab === "skills" && (
          <SkillsManager
            skills={data.skills}
            onChange={updateSkills}
          />
        )}

        {tab === "profile" && (
          <ProfileManager
            profile={data.profile}
            onChange={updateProfile}
          />
        )}

        {tab === "deploy" && (
          <div className="space-y-6">
            {/* How it works info */}
            <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-5">
              <h3 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                <Github size={16} /> How Saving Works
              </h3>
              <ul className="text-zinc-400 text-sm space-y-1.5">
                <li>🖥️ <strong className="text-zinc-200">Local (dev server)</strong> — Use "Save Locally" in the top bar when running <code className="bg-zinc-800 px-1 rounded">npm run dev</code>. Writes directly to your file.</li>
                <li>🌐 <strong className="text-zinc-200">Live site</strong> — Use the GitHub deploy below. It commits the data file to your repo, triggering GitHub Actions to rebuild in ~60 seconds.</li>
                <li>🔑 <strong className="text-zinc-200">Token security</strong> — Your GitHub token is stored only in <em>your browser's</em> localStorage. Never sent anywhere except GitHub's API.</li>
              </ul>
            </div>

            {/* GitHub Config */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
                <Github size={18} /> GitHub Auto-Deploy
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">GitHub Username (Owner)</label>
                    <input className="w-full bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                      placeholder="HazemAbuelanin"
                      value={ghOwner} onChange={e => setGhOwner(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Repository Name</label>
                    <input className="w-full bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                      placeholder="portfolio"
                      value={ghRepo} onChange={e => setGhRepo(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Branch</label>
                    <input className="w-full bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                      value={ghBranch} onChange={e => setGhBranch(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">
                      Personal Access Token (PAT) <span className="text-zinc-600">— needs <code>contents: write</code></span>
                    </label>
                    <input
                      type="password"
                      className="w-full bg-zinc-800 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 font-mono"
                      placeholder="ghp_..."
                      value={ghToken} onChange={e => setGhToken(e.target.value)}
                    />
                  </div>
                </div>

                <a
                  href="https://github.com/settings/personal-access-tokens/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github size={12} /> Create a Fine-Grained PAT on GitHub →
                </a>

                {/* Deploy button */}
                <button
                  onClick={deployGitHub}
                  disabled={deployStatus === "saving"}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-60 text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  {deployStatus === "saving"
                    ? <><Loader2 size={18} className="animate-spin" /> {deployMsg}</>
                    : <><Github size={18} /> Commit & Auto-Deploy to GitHub Pages</>}
                </button>

                {/* Deploy status */}
                {deployStatus !== "idle" && deployStatus !== "saving" && (
                  <div className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium ${
                    deployStatus === "ok" ? "bg-green-600/20 border border-green-600/40 text-green-300"
                    : "bg-red-600/20 border border-red-600/40 text-red-300"
                  }`}>
                    {deployStatus === "ok" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                    {deployMsg}
                  </div>
                )}
              </div>
            </div>

            {/* JSON Preview */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-3 text-sm">📋 Current Data Preview (JSON)</h3>
              <pre className="bg-zinc-800 rounded-lg p-4 text-xs text-zinc-300 overflow-auto max-h-64 font-mono">
                {jsonPayload}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
