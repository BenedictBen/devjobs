import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

    const [isLoggedIn, setIsLoggedIn] = useState(false); 


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = {
      username: "",
      email: "",
      password: "",
    };

    if (formData.username.trim() === "") {
      updatedErrors.username = "Username is required";
      isValid = false;
    }

    // A simple email validation example
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      updatedErrors.email = "Invalid email address";
      isValid = false;
    }

    if (formData.password.length < 6) {
      updatedErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(updatedErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      // Perform registration logic here (e.g., make an API request)
      setIsLoggedIn(true);
      console.log("Registration successful!", formData);
    } else {
      console.log("Form contains errors. Please fix them.");
    }
    
  };

  return (
    <div>
      {isLoggedIn ? (
        <h1 style={{ textAlign: "center" }}>Welcome, {formData.username}</h1>
      ) : (
        <div className="login">
          <h2>Login Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <div className="error">{errors.username}</div>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div className="form-field">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>

            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
