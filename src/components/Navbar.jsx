import React from "react";
import styles from "./Navbar.module.css";

import { getImageUrl } from "../utils";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.leftcontainer}>
        <ul>
          <li>
            <a href="">
              <img
                className={styles.imglogo}
                src={getImageUrl("nav/logo.svg")}
                alt="logo"
              />
            </a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.rightcontainer}>
        <a href="">
          <i className="fa-solid fa-bars"></i>
        </a>
      </div>
    </nav>
  );
};
