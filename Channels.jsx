import { useEffect, useState } from 'react';
import Hls from 'hls.js';

export default function Channels() {
  const [channels, setChannels] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('/channels.json').then(res => res.json()).then(setChannels);
  }, []);

  useEffect(() => {
    if (selected && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(selected.url);
      hls.attachMedia(document.getElementById('video'));
    }
  }, [selected]);

  return (
    <div className="p-4 text-white bg-black min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Canales en Vivo</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {channels.map((c, i) => (
          <button key={i} onClick={() => setSelected(c)} className="bg-gray-800 p-4 rounded">
            {c.name} ({c.category})
          </button>
        ))}
      </div>
      {selected && (
        <div className="mt-8">
          <h3 className="text-xl mb-2">Reproduciendo: {selected.name}</h3>
          <video id="video" controls autoPlay className="w-full max-w-4xl" />
        </div>
      )}
    </div>
  );
}