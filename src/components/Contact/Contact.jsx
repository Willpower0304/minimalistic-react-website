import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section className={styles.container} id="Contact">
      <h1 className={styles.title}>LET´S WORK TOGETHER</h1>
      <p className={styles.desc}>
        At Minimalism, collaboration is at the heart of what we do. We believe
        in the power of working together to achieve a simpler, more intentional
        lifestyle. Whether you’re looking to partner with us on a project,
        contribute your expertise, or join our team, we welcome your
        involvement.
      </p>
      <button className={styles.boton}>CONTACT US</button>
    </section>
  );
};
