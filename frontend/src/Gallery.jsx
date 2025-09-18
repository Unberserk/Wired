import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`/api/search?q=${query}`)
      .then(res => res.json())
      .then(data => setResults(data.comics || []));
  }, [query]);

  return (
    <div>
      <input
        style={{ width: "90%", margin: "1rem", padding: "0.5rem", borderRadius: "4px", border: "none" }}
        type="text"
        placeholder="Search comics..."
        onChange={e => setQuery(e.target.value)}
      />
      <div className="grid">
        {results.map(c => (
          <Link key={c.id} to={`/comic/${c.slug}`} className="card">
            <img src={c.cover_url} alt={c.title} />
            <p>{c.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
