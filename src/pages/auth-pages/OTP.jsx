import React, { useState } from 'react';
import styles from './OTP.module.scss';
import { useNavigate } from 'react-router-dom';
import { otpSchema } from '../../lib/validations';

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      otp: '',
    }));
  };

  const validateForm = () => {
    try {
      otpSchema.parse({ otp });
      setErrors({});
      return true;
    } catch (e) {
      const formErrors = e.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
      setErrors(formErrors);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const otpValue = otp.join("");
      console.log("Entered OTP is:", otpValue);
      navigate('/personal-address');
      
    }
  };

  return (
    <div className={styles.otpParentContainer}>
      <div className={styles.otpContainer}>
        <h2>Enter OTP</h2>
        <p>Enter the 6-Digit code to verify Email</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.otpInput}>
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                name="otp"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>
          {errors.otp && <span className={styles.error}>{errors.otp}</span>}
          <button type="submit">Verify</button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
