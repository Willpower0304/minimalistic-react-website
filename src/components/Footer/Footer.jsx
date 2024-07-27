import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.containerLeft}>
        <p>@2024 Design by William Espinoza</p>
      </div>
      <div className={styles.containerCenter}>
        <img
          className={styles.img}
          src={getImageUrl("nav/logo.svg")}
          alt="logo"
        />
      </div>
      <div className={styles.containerRight}>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-whatsapp"></i>
      </div>
    </footer>
  );
};
