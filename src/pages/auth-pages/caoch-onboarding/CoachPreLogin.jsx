import React, { useState } from "react";
import styles from "./PreAuth.module.scss";
import { coachButtonsHandler } from "../../../constants";

const CoachPreLogin = () => {
  const [email, setEmail] = useState("");
const socialButtons =coachButtonsHandler("preLogin");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
  };
 

  return (
    <div className={styles.signInContainer}>
      <h2>Sign in to your account</h2>
      <form onSubmit={handleSubmit}>
        {socialButtons.slice(0, 2).map((button, index) => (
          <button key={index} className={styles.socialButton} onClick={button.onClick}>
            <img src={button.icon} alt={button.text} />
            {button.text}
          </button>
        ))}
        <div className={styles.orContainer}>
          <div className={styles.line}></div>
          <div className={styles.orText}>OR</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.socialButtonWrapper}>
          {socialButtons.slice(2).map((button, index) => (
            <button key={index} className={styles.socialButton} onClick={button.onClick}>
              <img src={button.icon} alt={button.text} />
              {button.text}
            </button>
          ))}
        </div>
        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            By Signing up you agree to our Terms & Conditions and Privacy
            policies
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>
          Continue
        </button>
        <p className={styles.signUpText}>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default CoachPreLogin;
