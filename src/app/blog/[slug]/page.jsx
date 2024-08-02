import Image from "next/image";
import styles from "./singlePost.module.css";
<<<<<<< Updated upstream

const SinglePostPage = ({ params }) => {
  console.log(params);
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
=======
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);
  console.log(slug);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Daniel Nelson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>04.21.2024</span>
=======
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createAt.toString()}
            </span>
>>>>>>> Stashed changes
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
