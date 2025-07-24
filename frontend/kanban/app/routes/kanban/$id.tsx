import { useParams } from "react-router-dom";

export default function KanbanDetail() {
    const { id } = useParams();
    return <h1>Detail for Kanban board: {id}</h1>;
}