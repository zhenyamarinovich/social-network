import React from "react";

import style from "./Profile.module.scss";

import Posts from "./components/posts/Posts";

const Profile = () => {
  return (
    <div className={style.profileWrapper}>
      <div className={style.profile}>
        <div className={style.avatar}></div>
        <div>
          <h1>Zhenya Marinovich</h1>
          <div className={style.info}>
            <span className={style.subTitle}>Birthday: </span>
            <span className={style.defenition}>Desember 26, 1997 </span>
          </div>
          <div className={style.info}>
            <span className={style.subTitle}>Current city: </span>
            <span className={style.defenition}>Minsk</span>
          </div>
          <div className={style.info}>
            <span className={style.subTitle}>Relationship: </span>
            <span className={style.defenition}>Married</span>
          </div>
          <div className={style.info}>
            <span className={style.subTitle}>Education: </span>
            <span className={style.defenition}>Gomel state university</span>
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
