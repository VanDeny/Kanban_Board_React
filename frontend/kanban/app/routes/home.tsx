import type { Route } from "./+types/home";
import KanbanDetail from "~/routes/kanban/$id";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kanban Board" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (<div>
    test
    <KanbanDetail />
  </div>);
    }
