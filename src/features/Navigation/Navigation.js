import React from "react";

import style from "./Navigation.module.scss";

import {
  BsPersonCircle,
  BsFillChatFill,
  BsFillGearFill,
  BsNewspaper,
  BsFillMusicPlayerFill,
} from "react-icons/bs";

import NavigationItem from "./components/navigation-item";

const Navigation = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <NavigationItem name="My Profile">
          <BsPersonCircle />
        </NavigationItem>
        <NavigationItem name="Messages">
          <BsFillChatFill />
        </NavigationItem>
        <NavigationItem name="News">
          <BsNewspaper />
        </NavigationItem>
        <NavigationItem name="Music">
          <BsFillMusicPlayerFill />
        </NavigationItem>
        <NavigationItem name="Settings">
          <BsFillGearFill />
        </NavigationItem>
      </ul>
    </nav>
  );
};

export default Navigation;
