import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Comic() {
  const { slug } = useParams();
  const [comic, setComic] = useState(null);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch(`/
