import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthForm from "./AuthForm";
import axiosInstance from "../../api/axiosInstance";
import { authUser } from "../../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (credentials) => {
    try {
      const resp = await axiosInstance.post("/auth/login", credentials);
      const { token, user } = resp.data;

      // Store the token in local storage or a global state
      localStorage.setItem("token", token);
      dispatch(authUser(user));
      navigate("/protected"); // Change this to your desired path
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response && error.response.data) {
        alert(`Login failed: ${error.response.data.error}`);
      } else {
        alert("Login failed: Something went wrong.");
      }
    }
  };

  return <AuthForm onSubmit={handleLogin} formType="login" />;
};

export default Login;
