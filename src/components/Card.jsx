import { Link } from "react-router-dom";
import styles from "./Card.module.css";
function Card({ project }) {
  return (
    <Link to={project.name} className={`${styles.card} link`}>
      <img src={`./img/${project.image}`} />
      <div className={styles.description}>
        <h4>{project.name}</h4>
        {project.technology.map((el) => (
          <span key={el}>{el}</span>
        ))}
      </div>
      <p>{project.header}</p>
    </Link>
  );
}

export default Card;
