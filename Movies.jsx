import { useEffect, useState } from 'react';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/catalog.json').then(res => res.json()).then(data => setMovies(data.movies));
  }, []);

  return (
    <div className="p-4 text-white bg-black min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Películas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {movies.map((m, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-semibold">{m.title}</h3>
            <p className="text-sm">{m.genre}</p>
            <video src={m.url} controls className="mt-2 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}