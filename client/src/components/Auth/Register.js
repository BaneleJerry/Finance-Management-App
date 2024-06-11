import React from "react";
import AuthForm from "./AuthForm";
import axiosInstance from '../../api/axiosInstance'
import { useNavigate } from "react-router-dom";



const Register = () => {

  const navigate = useNavigate();

  const handleRegister = async (credentials) => {
    try {
      const resp = await axiosInstance.post("/auth/signup",credentials);
      navigate('/auth/login')
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle error (e.g., display an error message)
    }
  };

  return <AuthForm onSubmit={handleRegister} formType="register" />;
};

export default Register;