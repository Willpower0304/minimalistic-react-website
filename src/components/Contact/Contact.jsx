import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section className={styles.container} id="Contact">
      <h1 className={styles.title}>LET´S WORK TOGETHER</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
        delectus doloribus, expedita accusamus deserunt autem voluptatum,
        exercitationem dolorum eius fugit, eum nam ullam necessitatibus eveniet?
        Odio aliquid ipsa quae nulla.
      </p>
      <button className={styles.boton}>CONTACT US</button>
    </section>
  );
};
