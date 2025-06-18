import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="p-4 text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-6">TV Mundi Free</h1>
      <nav className="space-x-4">
        <Link to="/channels" className="underline">Canales en Vivo</Link>
        <Link to="/movies" className="underline">Películas</Link>
        <Link to="/series" className="underline">Series</Link>
      </nav>
    </div>
  );
}