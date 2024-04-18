import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/2738929/pexels-photo-2738929.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.17.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          voluptates! Magni necessitatibus voluptatibus corporis harum impedit
          est molestiae, inventore nihil repellendus suscipit unde iusto enim.
          Minima sit est cum delectus.
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
