import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Задача 3" },
    { name: "description", content: "Описание задачи 3" },
  ];
}

export default function Task3() {
  return (
    <div className="py-16 px-4 flex items-center justify-center">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-white text-center">Задача 3</h1>
      </div>
    </div>
  );
} 