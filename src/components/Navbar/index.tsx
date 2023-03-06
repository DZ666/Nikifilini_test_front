/* eslint-disable max-len */
import classNames from "classnames";
import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import CogIcon from "~/assets/icons/cog-solid.svg";
import QrcodeIcon from "~/assets/icons/qrcode-solid.svg";
import ListIcon from "../../assets/icons/list-solid.svg";
import Logo from "./logo.svg";
import styles from "./styles.m.styl";

function Navbar(): JSX.Element {
  useRouteMatch();
  
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Link to={"/orders?page=1"}>
        <div
          className={classNames({
            [styles.element]: true,
            [styles.active]: window.location.pathname.startsWith("/orders"),
          })}
        >
          <div className={styles.iconWrapper}>
            <ListIcon />
          </div>
        </div>
      </Link>
      <Link to={"/assembly"}>
        <div
          className={classNames({
            [styles.element]: true,
            [styles.active]: window.location.pathname.startsWith("/assembly"),
          })}
        >
          <div className={styles.iconWrapper}>
            <QrcodeIcon />
          </div>
        </div>
      </Link>
      <Link to={"/system"}>
        <div
          className={classNames({
            [styles.element]: true,
            [styles.active]: window.location.pathname.startsWith("/system"),
          })}
        >
          <div className={styles.iconWrapper}>
            <CogIcon />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
