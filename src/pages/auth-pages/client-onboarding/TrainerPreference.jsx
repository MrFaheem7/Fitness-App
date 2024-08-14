import React, { Fragment, useState } from "react";
import styles from "./TrainerPreference.module.scss";
import CustomSelect from "../../../components/UI/CustomSelect";
import { useNavigate } from "react-router-dom";
import { trainerCoachPreferenceFormFields } from "../../../constants";
import { trainerPreferencesSchema } from "../../../lib/validations";
import back from "../../../assets/icons/back.png";

const TrainerCoachPreferences = () => {
  const [formData, setFormData] = useState({
    gender: "",
    qualities: "",
    experience: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      trainerPreferencesSchema.parse(formData);
      navigate('/client-onboarding/fitness-goals');
    } catch (e) {
      setErrors(
        e.errors.reduce((acc, err) => {
          acc[err.path[0]] = err.message;
          return acc;
        }, {})
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.progressBarContainer}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          <img
            src={back}
            alt="Back"
            width={18}
            height={21}
          />
        </button>
        <div className={styles.progressBarWrapper}>
          <div className={styles.progressBar} style={{ width: "20%" }}></div>
        </div>
      </div>
      <h2>Trainer/Coach Preferences</h2>
      <form onSubmit={handleSubmit}>
        {trainerCoachPreferenceFormFields.map((field, index) =>
          field.type === "select" ? (
            <div key={index}>
              <CustomSelect
                placeholder={field.placeholder}
                options={field.options}
                value={formData[field.key]}
                onChange={(value) => handleChange(field.key, value)}
              />
              {errors[field.key] && (
                <p className={styles.error}>{errors[field.key]}</p>
              )}
            </div>
          ) : field.type === "textarea" ? (
            <Fragment key={index}>
              <textarea
                placeholder={field.placeholder}
                value={formData[field.key]}
                onChange={(e) => handleChange(field.key, e.target.value)}
              ></textarea>
              {errors[field.key] && (
                <p className={styles.error}>{errors[field.key]}</p>
              )}
            </Fragment>
          ) : null
        )}
        <button type="submit" className={styles.continueButton}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default TrainerCoachPreferences;
