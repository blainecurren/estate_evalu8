import "./projectList.scss";
import Project from "../project/Project";
import { projects } from "../../data";

export default function ProjectList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "projectList active" : "projectList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
