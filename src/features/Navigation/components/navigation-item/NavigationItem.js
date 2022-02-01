import React from "react";

import style from "./NavigationItem.module.scss";

const NavigationItem = ({ children, name }) => {
  return (
    <li className={style.li}>
      <a href="#" className={style.link}>
        <div className={style.container}>
          {children}
          <span className={style.text}>{name}</span>
        </div>
      </a>
    </li>
  );
};

export default NavigationItem;
