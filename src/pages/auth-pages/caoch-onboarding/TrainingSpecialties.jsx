import React, { useState } from "react";
import CustomSelect from "../../../components/UI/CustomSelect";
import "./TrainingSpecialties.scss";
import { useNavigate } from "react-router-dom";
import { trainingSpecialtiesformFields } from "../../../constants";
import { trainingSpecialtiesSchema } from "../../../lib/validations";
import ErrorMessage from "../../../components/atoms/error/error";

const TrainingSpecialties = () => {
  const [formData, setFormData] = useState({
    trainingType: "",
    trainingStyle: "",
    specificTechniques: "",
    areasOfExpertise: "",
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      trainingSpecialtiesSchema.parse(formData);
      // Pass formData to the next step or API
      console.log(formData);
      navigate("/availability-scheduling");
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
    <form onSubmit={handleSubmit}>
      <div className="training-specialties">
        <h1>Training Specialties & Services</h1>
        {trainingSpecialtiesformFields.map((field) => (
          <div key={field.name} className="form-group">
            {field.type === "select" ? (
              <CustomSelect
                placeholder={field.placeholder}
                options={field.options}
                value={formData[field.name]}
                onChange={handleChange(field.name)}
              />
            ) : (
              <input
                type="text"
                name={field.name}
                placeholder={field.placeholder}
                className="input-field"
                value={formData[field.name]}
                onChange={handleInputChange}
              />
            )}
            {errors[field.name] && (
              <ErrorMessage message={errors[field.name]} />
            )}
          </div>
        ))}
        <button type="submit" className="continue-button">
          Continue
        </button>
      </div>
    </form>
  );
};

export default TrainingSpecialties;
