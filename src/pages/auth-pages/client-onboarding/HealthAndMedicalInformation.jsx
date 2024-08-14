import React, { useState } from "react";
import styles from "./HealthAndMedicalInformation.module.scss";
import CustomSelect from "../../../components/UI/CustomSelect";
import { useNavigate } from "react-router-dom";
import { healthAndMedicalFormInfoFormFields } from "../../../constants";
import { healthAndMedicalSchema } from "../../../lib/validations";
import back from "../../../assets/icons/back.png";
const HealthAndMedicalInformation = () => {
  const [formData, setFormData] = useState({
    isMedicalCondition: "",
    isTakingMedication: "",
    isAllergies: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (field) => (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      healthAndMedicalSchema.parse(formData);
    //   navigate('/'); 
    console.log(formData);
    } catch (e) {
      setErrors(e.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {}));
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
      <h2>Health and Medical Information</h2>
      <form onSubmit={handleSubmit}>
        {healthAndMedicalFormInfoFormFields.map((field) => (
          <div key={field.name} className="form-group">
            <CustomSelect
              key={field.name}
              placeholder={field.placeholder}
              options={field.options}
              value={formData[field.name]}
              onChange={handleChange(field.name)}
            />
            {errors[field.name] && <p className={styles.error}>{errors[field.name]}</p>}
          </div>
        ))}
        <button type="submit" className={styles.continueButton}>
         Finish
        </button>
      </form>
    </div>
  );
};

export default HealthAndMedicalInformation;
