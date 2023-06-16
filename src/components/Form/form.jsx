import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./validation";

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
    Validation(userData, updatedErrors);
    setErrors(updatedErrors);

    
    if (!updatedErrors.email && !updatedErrors.password) {
    
      navigate("/home");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      <span>{errors.email && errors.email}</span>
      <hr />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      <span>{errors.password && errors.password}</span>

      <hr />
      {errors.email || errors.password ? (
        <div>
          <p>Please fix the following errors:</p>
          {errors.email && <p>{errors.email}</p>}
          {errors.password && <p>{errors.password}</p>}
        </div>
      ) : null}                                                                                                     
      <button type="submit" disabled={errors.email || errors.password}>
        Submit
      </button>
    </form>
  );
}
