import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";
import React from "react";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        className={styles.userImg}
        src={Userimg ? UserImg : "/noavatar.png"}
        alt=""
        height={50}
        width={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
