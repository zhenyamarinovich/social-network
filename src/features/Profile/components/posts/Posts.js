import React from "react";

import style from "./Posts.module.scss";
import Post from "./components/post";

const Posts = () => {
  return (
    <div className={style.posts}>
      <h2 className={style.h2}>My Posts</h2>
      <div className={style.newPost}>
        <textarea placeholder="What's new?"></textarea>
        <button>Post</button>
      </div>
      <Post />
    </div>
  );
};

export default Posts;
