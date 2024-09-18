import styles from "./Project.module.css";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../utils/projects";
import Window from "../components/Window";
import SvgBack from "../svgs/SvgBack";
function Project() {
  const navigate = useNavigate();
  const { name } = useParams();
  const project = projects.find((cur) => cur.name === name);
  console.log(project);

  const handleBackClick = function () {
    console.log("click");
    navigate("/projects");
  };
  return (
    <div className={`${styles.project} grow`}>
      <SvgBack onHandleClick={handleBackClick} className={"project"} />
      <img src={`/img/${project.imageLarge}`} alt="logo image" />
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>{project.name}</h2>
          <p>
            {project.description.split("\n").map((txt) => (
              <>
                <br /> {txt}
              </>
            ))}
          </p>
        </div>
        <div className={styles.infoWindow}>
          <Window project={project} />
        </div>
      </div>
      {project.imageDescription && (
        <img src={`/img/${project.imageDescription}`} alt="flow_chart" />
      )}
    </div>
  );
}

export default Project;
