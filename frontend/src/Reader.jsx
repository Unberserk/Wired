import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Reader() {
  const { id } = useParams();
  const [chapter, setChapter] = useState(null);

  useEffect(() => {
    fetch(`/api/chapter/${id}`).then(r => r.json()).then(setChapter);
  }, [id]);

  if (!chapter) return <p>Loading...</p>;

  return (
    <div className="reader">
      {chapter.images.map((img, i) => (
        <img key={i} src={img.url} alt={`Page ${i + 1}`} loading="lazy" />
      ))}
    </div>
  );
}
