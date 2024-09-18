import { Outlet } from "react-router-dom";
import projects from "../utils/projects";
import Cards from "../components/Cards";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={`${styles.projects} grow`}>
      <Cards projects={projects} />
      <Outlet />
    </div>
  );
}

export default Projects;
