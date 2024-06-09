import React from "react";
import AuthForm from "./AuthForm";

const Login = () => {
  const handleLogin = (credentials) => {
    // Handle login logic here
    console.log("Login", credentials);
    // You can call your authentication API here
  };

  return <AuthForm onSubmit={handleLogin} formType="login" />;
};

export default Login;
