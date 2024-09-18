import { Link } from "react-router-dom";
import Dino from "../svgs/Dino";
import styles from "./Logo.module.css";

function Logo({ color }) {
  return (
    <div className={styles.logoGroup}>
      <Link to={"/"}>
        <Dino color={color} />
      </Link>
      <h2 style={{ color: color }}>Petter Martin</h2>
    </div>
  );
}

export default Logo;
