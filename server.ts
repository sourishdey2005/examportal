import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '50mb' }));

  // Mock database
  const submissions: any[] = [];

  // API routes
  app.post("/api/submit", (req, res) => {
    const submission = req.body;
    submission.id = `sub_${Date.now()}`;
    submission.submittedAt = new Date().toISOString();
    submissions.push(submission);
    console.log(`New submission received from: ${submission.studentEmail}`);
    res.status(201).json({ success: true, id: submission.id });
  });

  app.get("/api/submissions", (req, res) => {
    res.json(submissions);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
