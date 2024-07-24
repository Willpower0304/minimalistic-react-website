import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Minimalism</h1>
      <h4 className={styles.slogan}>is a way of life</h4>
    </section>
  );
};
