export default async function handler(req, res) {
  const q = req.query.q?.toLowerCase() || "";
  const dummy = [
    { id: "1", slug: "hypothetical-hero", title: "Hypothetical Hero", cover_url: "/covers/hero.jpg" },
    { id: "2", slug: "phantom-saga", title: "Phantom Saga", cover_url: "/covers/saga.jpg" }
  ];
  res.status(200).json({ comics: dummy.filter(c => c.title.toLowerCase().includes(q)) });
}
