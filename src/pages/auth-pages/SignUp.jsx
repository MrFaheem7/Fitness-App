import React, { Fragment, useState } from 'react';
import styles from './SignUp.module.scss';
import { useNavigate } from 'react-router-dom';
import { signupSchema } from '../../lib/validations';
import { signUpFormFields } from '../../constants';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    profileImage: null
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profileImage') {
      setFormData({ ...formData, profileImage: files[0] });
      setErrors({ ...errors, profileImage: '' });
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      signupSchema.parse(formData);
      setErrors({});
      navigate('/otp');
      console.log(formData);
    } catch (e) {
      const formErrors = e.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
      setErrors(formErrors);
    }
  };

  return (
    <div className={styles.signup}>
      <h2>Create an Account</h2>
      <p>Enter Personal Information</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.profileImage}>
          <img
            src={formData.profileImage ? URL.createObjectURL(formData.profileImage) : '/src/assets/images/trainer-1.jpeg'}
            alt="Profile"
          />
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleChange}
          />
          {errors.profileImage && <span className="error">{errors.profileImage}</span>}
        </div>
        {signUpFormFields.map((field) => (
          <Fragment key={field.name}>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
            />
            <div className={styles.errorWrapper}>

            {errors[field.name] && <span className={styles.error}>{errors[field.name]}</span>}
            </div>
          </Fragment>
        ))}
        <button type="submit">Continue</button>
      </form>
      <p>Already have an account? <a href="/login">Log In</a></p>
    </div>
  );
};

export default Signup;
