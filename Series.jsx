import { useEffect, useState } from 'react';

export default function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch('/catalog.json').then(res => res.json()).then(data => setSeries(data.series));
  }, []);

  return (
    <div className="p-4 text-white bg-black min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Series</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {series.map((s, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="text-sm">{s.genre}</p>
            <video src={s.url} controls className="mt-2 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}