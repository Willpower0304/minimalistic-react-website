import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.container} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.leftcontainer}>
        <a href="">
          <img
            className={styles.imglogo}
            src={getImageUrl("nav/title.logo.svg")}
            alt="logo"
          />
        </a>
      </div>
      <div className={styles.rightcontainer}>
        <i
          className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(true)}
        >
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
    </nav>
  );
};
