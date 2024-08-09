import React from "react";
import styles from "./Hero.module.scss";
import { tags } from "../../constants";
import Badge from "../atoms/badge/badge";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.textContent}>
        <h1>Tailored Training, Anytime, Anywhere</h1>
        <p>
          FitConnect is the ultimate platform designed to connect certified
          fitness professionals with prospective clients who are eager to
          achieve their fitness goals.
        </p>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Specialty, Trainer name" />
          <input type="text" placeholder="Location" />
        </div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <Badge key={tag} tag={tag} />
          ))}
        </div>
      </div>
      <div className={styles.imageContent}>
        <img src="/src/assets/hero-images/Hero-bg.png" alt="Fitness Training" />
      </div>
    </section>
  );
};

export default Hero;
