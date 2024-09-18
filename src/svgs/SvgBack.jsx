import styles from "./SvgBack.module.css";
function SvgBack({ className, onHandleClick }) {
  return (
    <svg
      onClick={onHandleClick}
      className={styles[className]}
      id="Component_20_1"
      data-name="Component 20 – 1"
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 35 35"
    >
      <circle
        id="Ellipse_63"
        data-name="Ellipse 63"
        cx="17.5"
        cy="17.5"
        r="17.5"
        fill="#fff"
      />
      <path
        id="arrow-sm-left-svgrepo-com"
        d="M6,13.91H22.584M6,13.91,12.91,7M6,13.91l6.91,6.91"
        transform="translate(3.5 3.5)"
        fill="none"
        stroke="#343434"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default SvgBack;
