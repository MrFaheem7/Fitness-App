import React from "react";
import styles from "./HowItWorks.module.scss";
import { stepsData } from "../../constants";
import seperator from "../../assets/icons/step-sperator.svg";

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <h2>How it Works</h2>
      <div className={styles.steps}>
        {stepsData.map((step, index) => (
          <React.Fragment key={index}>
            <div className={styles.step}>
              <div className={styles.imageWrapper}>
                <img src={step.image} alt={step.title} />
                {index < stepsData.length - 1 && (
                  <img
                    src={seperator}
                    alt="step-seperator"
                    className={styles.dotedLine}
                  />
                )}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
