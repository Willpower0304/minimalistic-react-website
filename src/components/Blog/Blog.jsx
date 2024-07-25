import React from "react";
import styles from "./Blog.module.css";

export const Blog = () => {
  return (
    <section className={styles.container} id="Blog">
      <h2 className={styles.title}>About Our Blog</h2>
      <p className={styles.info}>
        Welcome to Minimalism, where is a way of life is not just a slogan but a
        guiding principle. Our website is dedicated to helping you embrace
        simplicity and intentional living. Here, you´ll find resources, tips,
        and community support to declutter your mind, home, and life.
      </p>
      <div className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <i className="fa-solid fa-tree"></i>
          <h3 className={styles.titleinfo}>Be Inpired</h3>
          <p className={styles.pinfo}>
            Discover a world of possibilities with Minimalism. Our inspiring
            stories and articles will motivate you to simplify your life and
            focus on what truly matters.
          </p>
        </div>
        <div className={styles.infoContainer}>
          <i className="fa-solid fa-layer-group"></i>
          <h3 className={styles.titleinfo}>Get Connected</h3>
          <p className={styles.pinfo}>
            Join a community of like-minded individuals on Minimalism. Connect
            with others who share your passion for minimalism and intentional
            living.
          </p>
        </div>
        <div className={styles.infoContainer}>
          <i className="fa-solid fa-briefcase"></i>
          <h3 className={styles.titleinfo}>Equip Yourself</h3>
          <p className={styles.pinfo}>
            Minimalism provides you with the tools and resources you need to
            succeed. From practical guides to expert advice, we offer everything
            you need to declutter your life and live more intentionally.
          </p>
        </div>
      </div>
      <a href="#" className={styles.link}>
        View More
      </a>
    </section>
  );
};
