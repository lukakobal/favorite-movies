import React from "react";
import "./styles.css";

export default function App() {
  const movies = [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "The Matrix", year: 1999 },
    { id: 3, title: "Interstellar", year: 2014 },
    { id: 4, title: "The Dark Knight", year: 2008 },
  ];

  return (
    <div className="container">
      <h1>🎬 Favorite Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Year {movie.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
