import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <img
        className={styles.imgProfile}
        src="img/petter2.jpg"
        alt="profile"
      ></img>
      <article>
        <h4>Welcome to my Page! </h4>
        <p>
          I'm Petter, originally from Norway, and I’ve been living in New York
          City since 2022. I work as a Technical Program Manager in the tech
          industry, where I lead projects that turn innovative ideas into real
          solutions. Outside of work, I enjoy playing guitar at clubs around NYC
          and diving into side projects that sharpen my React and JavaScript
          skills. You can explore some of my recent work on the Projects page —
          and feel free to reach out if you’d like to connect or collaborate!
        </p>
      </article>
    </div>
  );
}

export default About;
