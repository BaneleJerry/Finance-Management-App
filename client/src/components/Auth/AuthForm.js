import React, { useState } from "react";
import "./AuthForm.css";

const AuthForm = ({ onSubmit, formType }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "register" && password !== rePassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    onSubmit({
      name,
      surname,
      dateOfBirth,
      username,
      email,
      password,
    });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>{formType === "login" ? "Login" : "Register"}</h2>
      {formType === "register" && (
        <>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Surname:</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </>
      )}
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {formType === "register" && (
        <div className="form-group">
          <label>Re-enter Password:</label>
          <input
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            required
          />
        </div>
      )}
      {error && <p className="error">{error}</p>}
      <button type="submit">
        {formType === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default AuthForm;
