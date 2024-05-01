import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Manhvu</div>
      <div className={styles.text}>Dev Frontend</div>
    </div>
  );
};

export default Footer;
