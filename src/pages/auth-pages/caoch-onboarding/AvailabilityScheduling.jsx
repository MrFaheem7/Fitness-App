import React, { useState } from "react";
import CustomSelect from "../../../components/UI/CustomSelect";
import "./AvailabilityScheduling.scss";
import { availabilitySchedulingFormFields } from "../../../constants";
import { availabilitySchedulingSchema } from "../../../lib/validations";


const AvailabilityScheduling = () => {
  const [formData, setFormData] = useState({
    availability: "",
    trainingEnvironment: "",
    gymLocation: "",
    guestPasses: "",
  });

  const [errors, setErrors] = useState({});

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
      availabilitySchedulingSchema.parse(formData);
      console.log(formData);
    } catch (e) {
      setErrors(e.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {}));
    }
  };

  return (
    <div className="availability-scheduling">
      <h1>Availability, Scheduling & Location</h1>
      <form onSubmit={handleSubmit}>
        {availabilitySchedulingFormFields.map((field) => (
          <div key={field.name}>
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
            {errors[field.name] && <p className="error">{errors[field.name]}</p>}
          </div>
        ))}
        <button type="submit" className="continue-button">Finish</button>
      </form>
    </div>
  );
};

export default AvailabilityScheduling;
