import styles from "./Header.module.css";
import Logo from "../components/Logo";
import Menu from "../components/Menu";

function Header() {
  return (
    <header className={styles.header}>
      <Logo color={"#FC6D43"} />
      <Menu />
    </header>
  );
}

export default Header;
