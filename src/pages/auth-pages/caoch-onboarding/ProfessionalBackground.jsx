import React, { useState } from "react";
import "./ProfessionalBackground.scss";
import CustomSelect from "../../../components/UI/CustomSelect";
import { BiUpload } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { professionalBackgroundFormFields } from "../../../constants";
import { professionalBackgroundSchema } from "../../../lib/validations";
import CustomInput from "../../../components/atoms/input/input";
import AppButton from "../../../components/atoms/button/button";

const ProfessionalBackground = () => {
  const [formData, setFormData] = useState({
    qualifications: "",
    certificationType: "",
    yearsOfExperience: "",
    previousExperience: "",
    uploadedDocument: null,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (field) => (valueOrEvent) => {
    let value;

    if (field === "uploadedDocument") {
      value = valueOrEvent.target.files[0];
    } else if (valueOrEvent && valueOrEvent.target) {
      value = valueOrEvent.target.value;
    } else {
      value = valueOrEvent;
    }

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      professionalBackgroundSchema.parse(formData);
      console.log(formData);
      navigate("/prospective-client-preference");
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
    <section className="professional-background">
      <h2>Professional Background</h2>
      <form className="background-form" onSubmit={handleSubmit}>
        {professionalBackgroundFormFields.map((field) => (
          <div key={field.name} className="form-group">
            {field.type === "input" && (
              <CustomInput
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange(field.name)}
              />
            )}
            {field.type === "select" && (
              <CustomSelect
                placeholder={field.placeholder}
                options={field.options}
                value={formData[field.name]}
                onChange={handleChange(field.name)}
              />
            )}
            {field.type === "file" && (
              <>
                <CustomInput
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange(field.name)}
                  name={field.name}
                />
                <BiUpload className="upload-icon" />
              </>
            )}
            {errors[field.name] && (
              <p className="error">{errors[field.name]}</p>
            )}
          </div>
        ))}
        <AppButton type="submit">Continue</AppButton>
      </form>
    </section>
  );
};

export default ProfessionalBackground;
