import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
<<<<<<< Updated upstream
=======
import { getPosts } from "@/lib/data";

const BlogPage = async () => {
  const posts = await getPosts();
>>>>>>> Stashed changes

const BlogPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
};
export default BlogPage;
