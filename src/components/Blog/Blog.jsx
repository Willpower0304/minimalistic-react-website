import React from "react";
import styles from "./Blog.module.css";

export const Blog = () => {
  return (
    <section className={styles.container} id="Blog">
      <h2 className={styles.title}>About Our Blog</h2>
      <p className={styles.info}>
        Welcome to MinimalismHub, where is a way of life is not just a slogan
        but a guiding principle. Our website is dedicated to helping you embrace
        simplicity and intentional living. Here, you´ll find resources, tips,
        and community support to declutter your mind, home, and life.
      </p>
      <div className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <i className="fa-solid fa-tree"></i>
          <h3>Be Inpired</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
        <div className={styles.infoContainer}>
          <i className="fa-solid fa-layer-group"></i>
          <h3>Get Connected</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
        <div className={styles.infoContainer}>
          <i className="fa-solid fa-briefcase"></i>
          <h3>Equip Yourself</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
      </div>
      <a href="#" className={styles.link}>
        View More
      </a>
    </section>
  );
};
