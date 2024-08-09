import "./Login.scss";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { useDispatch } from "react-redux";
import PrimaryButton from "../../../components/UI/PrimaryButton";
import { usePostApi } from "../../../hooks/api";

import { loginSchema } from "../../../lib/validations";
import { loginFormFields } from "../../../constants";

const ClientLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const { handleMutation, isLoading } = usePostApi();


  const onSubmitLogin = () => {
    try {
      loginSchema.parse(formValues);
      setErrors({});
      // handleMutation(
      //   {
      //     path: "auth/login",
      //     data: formValues,
      //   },
      //   (res) => {
      //     dispatch(
      //       login({
      //         user: res.data.user,
      //         token: res.data.tokens.access.token,
      //         refreshToken: res.data.tokens.refresh.token,
      //         tokenExpiry: res.data.tokens.access.expires,
      //         refreshTokenExpiry: res.data.tokens.refresh.expires,
      //       })
      //     );
      //     navigate("/admin");
      //   }
      // );
    } catch (e) {
      const formErrors = e.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
      setErrors(formErrors);
      console.log(formErrors);
    }
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="auth-container">
      <div className="auth-main-container">
        <h2>Login</h2>
        <div className="auth-inputs">
          {loginFormFields.map((field) => (
            <Fragment key={field.name}>
              <input
                onChange={handleInputChange}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={formValues[field.name]}
              />
              {errors[field.name] && <span className="error">{errors[field.name]}</span>}
            </Fragment>
          ))}
        </div>
        <div className="checkboxContainer">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            By Signing up you agree to our Terms & Conditions and Privacy policies
          </label>
        </div>
        <PrimaryButton onClick={onSubmitLogin} className={"auth-button"}>
          {isLoading ? <Spin spinning={true} size="small" /> : "Login"}
        </PrimaryButton>
        <p className="signUpText">
          Don't have an account? <a href="/client-pre-signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default ClientLogin;
