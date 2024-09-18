import Card from "./Card";
import styles from "./Cards.module.css";

function Cards({ projects }) {
  return (
    <div className={styles.cards}>
      {projects.map((project) => (
        <Card key={project.name} project={project} />
      ))}
    </div>
  );
}

export default Cards;
