import React from "react";
import AuthForm from "./AuthForm";

const Register = () => {
  const handleRegister = (credentials) => {
    // Handle registration logic here
    console.log("Register", credentials);
    // You can call your registration API here
  };

  return <AuthForm onSubmit={handleRegister} formType="register" />;
};

export default Register;
