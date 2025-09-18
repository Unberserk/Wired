import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Comic() {
  const { slug } = useParams();
  const [comic, setComic] = useState(null);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch(`/api/comic/${slug}`).then(r => r.json()).then(setComic);
    fetch(`/api/comic/${slug}/chapters`).then(r => r.json()).then(d => setChapters(d.chapters || []));
  }, [slug]);

  if (!comic) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{comic.title}</h1>
      <p>{comic.desc}</p>
      <ul>
        {chapters.map(ch => (
          <li key={ch.id}>
            <Link to={`/chapter/${ch.id}`}>Chapter {ch.chap}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
