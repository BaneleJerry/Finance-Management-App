import React from "react";
import AuthForm from "./AuthForm";
import axiosInstance from '../../api/axiosInstance'


const Register = () => {
  const handleRegister = async (credentials) => {
    try {
      const resp = await axiosInstance.post("/auth/signup",credentials);
      console.log(resp.data);
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle error (e.g., display an error message)
    }
  };

  return <AuthForm onSubmit={handleRegister} formType="register" />;
};

export default Register;
