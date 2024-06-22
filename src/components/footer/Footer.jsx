import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>~ DnT ~</div>
      <div className={styles.text}>ThisGuyDaniel © All rights reserved.</div>
    </div>
  );
};
export default Footer;
