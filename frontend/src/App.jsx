import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Gallery from "./Gallery";
import Comic from "./Comic";
import Reader from "./Reader";

export default function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">⚡ Wired</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/comic/:slug" element={<Comic />} />
        <Route path="/chapter/:id" element={<Reader />} />
      </Routes>
    </>
  );
}
