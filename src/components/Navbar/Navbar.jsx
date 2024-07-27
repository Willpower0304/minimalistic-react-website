import React, { useState } from "react";
import styles from "./Navbar.module.css";

import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.container} id="Home">
      <div className={styles.leftcontainer}>
        <ul>
          <a href="">
            <img
              className={styles.imglogo}
              src={getImageUrl("nav/logo.svg")}
              alt="logo"
            />
          </a>
          <li>
            <a href="#Home">HOME</a>
          </li>
          <li>
            <a href="#Blog">BLOG</a>
          </li>
          <li>
            <a href="#Contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className={styles.rightcontainer}>
        <i
          className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
      </div>
    </nav>
  );
};
