import { useEffect, useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Задача 3" },
    { name: "description", content: "Описание задачи 3" },
  ];
}


export default function Task3() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL("./task3.worker.ts", import.meta.url));
    worker.onmessage = (e) => {
      setD(e.data);
      worker.terminate();
    };
    worker.postMessage(null);
    return () => worker.terminate();
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white text-center">Задача 3</h1>
      </div>
      <div className="mt-8 text-white text-center">{d}</div>
    </div>
  );
} 