import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("task2", "routes/task2.tsx"),
  route("task3", "routes/task3.tsx"),
] satisfies RouteConfig;
