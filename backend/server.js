const express = require("express");
const app = express();
const PORT = 3001;

// Placeholder API base (for future replacement)
const API_BASE = "https://api.example.com/v1.0";

// Dummy comics data
const comics = [
  { id: "1", slug: "hypothetical-hero", title: "Hypothetical Hero", cover_url: "/covers/hero.jpg", desc: "A Wired comic: This is a dummy description." },
  { id: "2", slug: "phantom-saga", title: "Phantom Saga", cover_url: "/covers/saga.jpg", desc: "A Wired comic: Another dummy description." }
];

// Dummy chapters
const chapters = {
  "hypothetical-hero": [{ id: "c1", chap: 1 }, { id: "c2", chap: 2 }],
  "phantom-saga": [{ id: "c3", chap: 1 }]
};

// Dummy images
const images = {
  "c1": [{ url: "/pages/page1.jpg" }, { url: "/pages/page2.jpg" }],
  "c2": [{ url: "/pages/page1.jpg" }],
  "c3": [{ url: "/pages/page1.jpg" }]
};

// Endpoints
app.get("/api/search", (req, res) => {
  const q = req.query.q?.toLowerCase() || "";
  res.json({ comics: comics.filter(c => c.title.toLowerCase().includes(q)) });
});

app.get("/api/comic/:slug", (req, res) => {
  const comic = comics.find(c => c.slug === req.params.slug);
  if (!comic) return res.status(404).json({ error: "Not found" });
  res.json(comic);
});

app.get("/api/comic/:slug/chapters", (req, res) => {
  res.json({ chapters: chapters[req.params.slug] || [] });
});

app.get("/api/chapter/:id", (req, res) => {
  res.json({ images: images[req.params.id] || [] });
});

app.listen(PORT, () => console.log(`Wired backend running on port ${PORT}`));
