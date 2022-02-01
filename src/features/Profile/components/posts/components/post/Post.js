import React from "react";

import style from "./Post.module.scss";

const Post = () => {
  return (
    <>
      <div className={style.post}>
        <div className={style.author}>
          <div className={style.icon}></div>
          <h3 className={style.h3}>Zhenya Marinovich</h3>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <div className={style.separator}></div>
      </div>
      <div className={style.post}>
        <div className={style.author}>
          <div className={style.icon}></div>
          <h3 className={style.h3}>Zhenya Marinovich</h3>
        </div>
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className={style.separator}></div>
      </div>
      <div className={style.post}>
        <div className={style.author}>
          <div className={style.icon}></div>
          <h3 className={style.h3}>Zhenya Marinovich</h3>
        </div>
        <p>Text ...</p>
        <div className={style.separator}></div>
      </div>
    </>
  );
};

export default Post;
