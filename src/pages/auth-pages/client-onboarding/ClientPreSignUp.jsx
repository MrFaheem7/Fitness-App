import React from "react";
import { buttonsHandler } from "../../../constants";
import styles from "./PreAuth.module.scss";

const ClientPreSignUp = () => {
  const socialButtons = buttonsHandler("preSignUp");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up");
  };

  return (
    <div className={styles.signInContainer}>
      <h2>Create a new account</h2>
      <form onSubmit={handleSubmit}>
        {socialButtons.slice(0, 2).map((button, index) => (
          <button
            key={index}
            className={styles.socialButton}
            onClick={button.onClick}
          >
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
            <button
              key={index}
              className={styles.socialButton}
              onClick={button.onClick}
            >
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
          Already have an account? <a href="/client-login">Log In</a>
        </p>
      </form>
    </div>
  );
};

export default ClientPreSignUp;
