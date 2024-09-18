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
          I'm Petter, originally from Norway, and I've been living in New York
          City since 2022. I'm currently working as a Technical Program Manager.
          In my spare time, I enjoy playing guitar at various clubs around NYC.
          When I’m not playing music, I like to dive into tech projects,
          especially working on improving my React and JavaScript skills. Feel
          free to check out my recent work on the Projects page, and don't
          hesitate to reach out if you have any questions or are interested in
          collaborating!
        </p>
      </article>
    </div>
  );
}

export default About;
