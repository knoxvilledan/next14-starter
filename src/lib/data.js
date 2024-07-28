import { Post } from "./models";
import { User } from "./models";
import { connectToDb } from "./utils";

// //TEMPORARY DATA
// const users = [
//   { id: 1, name: "John Doe" },
//   { id: 2, name: "Jane Doe" },
//   { id: 3, name: "Alice" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "Body 1 2", userId: 1 },
//   { id: 2, title: "Post 2", body: "Body 2", userId: 2 },
//   { id: 3, title: "Post 3", body: "Body 3", userId: 3 },
//   { id: 4, title: "Post 4", body: "Body 4", userId: 1 },
//   { id: 5, title: "Post 5", body: "Body 5", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching posts");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.find({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed while fetching posts");
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching user");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching users");
  }
};
