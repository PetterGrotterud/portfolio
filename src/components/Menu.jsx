import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.mainMenu}>
      <ul>
        <NavLink to={"home"}>
          <li>Home</li>
        </NavLink>
        <NavLink to={"projects"}>
          <li>Projects</li>
        </NavLink>
        <NavLink to={"contact"}>
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Menu;
