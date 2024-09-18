import styles from "./ContactDetails.module.css";

function ContactDetails({ header, link, text, Comp }) {
  return (
    <div className={styles.contactDetails}>
      <h4>{header}</h4>
      <a href={link} className={`${styles.link} link`}>
        <Comp />
        <span>{text}</span>
      </a>
    </div>
  );
}

export default ContactDetails;
