import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>We've been married for almost 26 years</h1>
        <p className={styles.desc}>
          We've built memories that are bigger, bolder, brighter and better than
          most other marriages in America.. We believe in good ideas,
          flexibility, and working daily for peace.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>28 +</h1>
            <p>Years of Friendship</p>
          </div>
          <div className={styles.box}>
            <h1>28 +</h1>
            <p>Years of Relationship</p>
          </div>
          <div className={styles.box}>
            <h1>3</h1>
            <p>Decades Together</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};
export default AboutPage;
