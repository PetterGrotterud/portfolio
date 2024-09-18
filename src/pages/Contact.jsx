import ContactDetails from "../components/ContactDetails";
import styles from "./Contact.module.css";
import SvgEmail from "../svgs/SvgEmail";
import SvgLinkedin from "../svgs/SvgLinkedin";
import SvgGithub from "../svgs/SvgGithub";

function Contact() {
  return (
    <div className={`${styles.contact} grow`}>
      <div className={styles.container}>
        <ContactDetails
          header={"Email"}
          link={"mailto:pettermarging@gmail.com"}
          text={"pettermarting@gmail.com"}
          Comp={SvgEmail}
        />
        <ContactDetails
          header={"LinkedIn"}
          link={"https://www.linkedin.com/in/petter-grotterud/"}
          text={"www.linkedin.com/in/petter-grotterud/"}
          Comp={SvgLinkedin}
        />
        <ContactDetails
          header={"Github"}
          link={"https://github.com/PetterGrotterud/"}
          text={"PetterGrotterud"}
          Comp={SvgGithub}
        />
      </div>
    </div>
  );
}

export default Contact;
