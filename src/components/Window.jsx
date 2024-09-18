import { Link } from "react-router-dom";
import styles from "./Window.module.css";
function Window({ project }) {
  console.log(project);
  return (
    <>
      <div className={styles.window}>
        <h4>Technology used</h4>
        {project.technology.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </div>
      <a href={`https://${project.link}`} className="link">
        <div className={styles.windowLink}>
          <span>View in production</span>
        </div>
      </a>
    </>
  );
}

export default Window;
