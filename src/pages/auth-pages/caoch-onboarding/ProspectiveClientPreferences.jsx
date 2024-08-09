import React, { useState } from 'react';
import './ProspectiveClientPreferences.scss';
import CustomSelect from '../../../components/UI/CustomSelect';
import { useNavigate } from 'react-router-dom';
import { prosPectiveClientPreferenceFormFields } from '../../../constants';
import { prospectiveClientPreferencesSchema } from '../../../lib/validations';
import ErrorMessage from '../../../components/atoms/error/error';

const ProspectiveClientPreferences = () => {
  const [formData, setFormData] = useState({
    ageGroup: '',
    gender: '',
    clienteleType: '',
    goals: '',
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
      [field]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      prospectiveClientPreferencesSchema.parse(formData);
      // Pass formData to the next step or API
      console.log(formData);
      navigate('/training-specialities');
    } catch (e) {
      setErrors(e.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {}));
    }
  };

  return (
    <section className="prospective-client-preferences">
      <h2>Prospective Client Preferences</h2>
      <form className="preferences-form" onSubmit={handleSubmit}>
        {prosPectiveClientPreferenceFormFields.map((field) => (
          <div key={field.name} className="form-group">
            <CustomSelect
              placeholder={field.placeholder}
              options={field.options}
              value={formData[field.name]}
              onChange={handleChange(field.name)}
            />
            {errors[field.name] && <ErrorMessage>{errors[field.name]}</ErrorMessage>}
          </div>
        ))}
        <button type="submit">Continue</button>
      </form>
    </section>
  );
};

export default ProspectiveClientPreferences;
