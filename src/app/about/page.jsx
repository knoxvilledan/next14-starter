import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19746488/pexels-photo-19746488/free-photo-of-entrance-to-a-closed-amusement-park.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          fill
        />
      </div>
    </div>
  );
};
export default AboutPage;
