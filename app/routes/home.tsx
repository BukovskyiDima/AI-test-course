import type { Route } from "./+types/home";
import App from "src/App";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "First lesson of AI course" },
    { name: "description", content: "Welcome to AI course!" },
  ];
}

export default function Home() {
  return <App />;
}
