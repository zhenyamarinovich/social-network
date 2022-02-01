import React from "react";

import style from "./Header.module.scss";

import logo from "../../assets/images/vk-logo.svg";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.logo}>
          <img src={logo} alt="Логотип вконтакте" />
        </div>
      </header>
    </div>
  );
};

export default Header;
