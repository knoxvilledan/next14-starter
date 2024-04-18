import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/2738929/pexels-photo-2738929.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.userImg}
            src="https://images.pexels.com/photos/2738929/pexels-photo-2738929.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Daniel Nelson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.17.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          This will be for one of the first stories that I publish that will
          showcase the Love that we have. This is Test 1 of blog posts.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
