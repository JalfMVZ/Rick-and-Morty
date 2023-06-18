import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Validation from "./Validations";
import style from "./Forms.module.css";

export default function Form() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const navigate = useNavigate();

  function handleChange(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedErrors = Validation(userData);

    if (Object.keys(updatedErrors).length === 0) {
      navigate("/home");
    } else {
      setErrors(updatedErrors);
    }
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  return (

    


    <div className={style.forms_container}>
      <div className={style.form_card}>
        <form onSubmit={handleSubmit}>
          <div className={style.input_container}>
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              autoComplete="off"
              required
              className={style.imputglb}
            />

            <label htmlFor="email">
              {errors.email ? errors.email : "Username"}
            </label>
          </div>

          <div className={style.input_container}>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              required
              className={style.imputglb}
            />
            <label htmlFor="password">
              {errors.password ? errors.password : "Password"}
            </label>
          </div>

          <button className={style.btn_submit} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
