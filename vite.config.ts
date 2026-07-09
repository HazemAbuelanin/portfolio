import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// ── Local Admin Save Plugin ───────────────────────────────────────────────────
// Exposes POST /api/save-portfolio during `npm run dev`.
// When you hit "Save Locally" in the Admin Dashboard, this writes your
// changes directly to src/data/portfolioData.json on disk.
// This plugin does NOTHING in production builds.
// ─────────────────────────────────────────────────────────────────────────────
function adminSavePlugin() {
  return {
    name: "portfolio-admin-save",
    configureServer(server: import("vite").ViteDevServer) {
      // ── Save JSON ─────────────────────────────────────────────────
      server.middlewares.use("/api/save-portfolio", (req, res) => {
        if (req.method !== "POST") { res.writeHead(405); res.end("Method Not Allowed"); return; }
        let body = "";
        req.on("data", (chunk: Buffer) => (body += chunk.toString()));
        req.on("end", () => {
          try {
            JSON.parse(body);
            const filePath = path.resolve(__dirname, "src/data/portfolioData.json");
            fs.writeFileSync(filePath, body, "utf-8");
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: true }));
            console.log("[admin-save] ✅ portfolioData.json updated");
          } catch (e) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
        });
      });

      // ── Upload Media ──────────────────────────────────────────────
      server.middlewares.use("/api/upload-media", (req, res) => {
        if (req.method !== "POST") { res.writeHead(405); res.end("Method Not Allowed"); return; }
        const filename = (req.headers["x-filename"] as string) || `upload-${Date.now()}.bin`;
        const safe = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
        const uploadDir = path.resolve(__dirname, "public/lovable-uploads");
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
        const outPath = path.join(uploadDir, safe);
        const chunks: Buffer[] = [];
        req.on("data", (chunk: Buffer) => chunks.push(chunk));
        req.on("end", () => {
          try {
            fs.writeFileSync(outPath, Buffer.concat(chunks));
            const publicPath = `lovable-uploads/${safe}`;
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: true, path: publicPath }));
            console.log(`[admin-upload] ✅ Saved ${publicPath}`);
          } catch (e) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => ({
  base: "/portfolio/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "development" && adminSavePlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
