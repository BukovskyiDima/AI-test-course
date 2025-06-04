import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav className="flex gap-4 justify-center mb-8">
      <Link to="/" className="text-white hover:underline">Задача 1</Link>
      <Link to="/task2" className="text-white hover:underline">Задача 2</Link>
      <Link to="/task3" className="text-white hover:underline">Задача 3</Link>
    </nav>
  );
} 