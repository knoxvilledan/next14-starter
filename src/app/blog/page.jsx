import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {
  const posts = await getPosts();

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
};
export default BlogPage;
