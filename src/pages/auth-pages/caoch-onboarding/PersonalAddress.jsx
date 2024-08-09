import React, { useState } from 'react';
import CustomSelect from '../../../components/UI/CustomSelect';
import styles from './PersonalAddress.module.scss';
import { useNavigate } from 'react-router-dom';
import { personalAddressSchema } from '../../../lib/validations';


const PersonalAddress = () => {
  const [form, setForm] = useState({
    street: '',
    city: '',
    state: '',
    country: '',
    gender: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [key]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      personalAddressSchema.parse(form);
      console.log("Form Data:", form);
      navigate('/professional-background');
    } catch (e) {
      setErrors(e.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {}));
    }
  };

  return (
    <div className={styles.personalAddressContainer}>
      <h2>Personal Address</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Street No."
          value={form.street}
          onChange={(e) => handleChange('street', e.target.value)}
        />
        {errors.street && <p className={styles.error}>{errors.street}</p>}
        <div className={styles.row}>
          <input
            type="text"
            placeholder="City"
            value={form.city}
            onChange={(e) => handleChange('city', e.target.value)}
          />
          {errors.city && <p className={styles.error}>{errors.city}</p>}
          <input
            type="text"
            placeholder="State"
            value={form.state}
            onChange={(e) => handleChange('state', e.target.value)}
          />
          {errors.state && <p className={styles.error}>{errors.state}</p>}
        </div>
        <CustomSelect
          placeholder="Country"
          options={['USA', 'Canada', 'UK']}
          value={form.country}
          onChange={(value) => handleChange('country', value)}
        />
        {errors.country && <p className={styles.error}>{errors.country}</p>}
        <CustomSelect
          placeholder="Gender"
          options={['Male', 'Female', 'Other']}
          value={form.gender}
          onChange={(value) => handleChange('gender', value)}
        />
        {errors.gender && <p className={styles.error}>{errors.gender}</p>}
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={form.agree}
            onChange={(e) => handleChange('agree', e.target.checked)}
          />
          <span>
            By Signing up you agree to our Terms & Conditions and Privacy policies
          </span>
          {errors.agree && <p className={styles.error}>{errors.agree}</p>}
        </div>
        <button type="submit" className={styles.submitButton}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default PersonalAddress;
