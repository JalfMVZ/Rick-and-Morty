import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validations from "./Validations";
import style from './Forms.module.css';

export default function Form() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedErrors = { ...errors };
    Validations(userData, updatedErrors);
    setErrors(updatedErrors);

    if (!updatedErrors.email && !updatedErrors.password) {
      navigate("/home");
    }
  };

  return (
    <div className={style.forms_container}>
      <div className={style.form_card}>
        <form onSubmit={handleSubmit}>
          <div className={style.input_container}>
            <label htmlFor="email" className={style.email_label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className={style.input_field}
            />
          </div>
          <span>{errors.email && errors.email}</span>

          <div className={style.input_container}>
            <label htmlFor="password" className={style.passw_label}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className={style.input_field}
            />
          </div>
          <span>{errors.password && errors.password}</span>

          {errors.email || errors.password ? (
            <div>
              {}
              {}
            </div>
          ) : null}
          <button className={style.btn_submit} type="submit" disabled={errors.email || errors.password}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
