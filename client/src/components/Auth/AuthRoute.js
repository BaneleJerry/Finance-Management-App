import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { useDispatch } from "react-redux";
import { authUser } from "../../features/auth/authSlice";

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/auth/login");
        return;
      }

      try {
        const resp = await axiosInstance.get("/auth/authrization", {
          headers: {
            Authorization: token,
          },
        });

        const user = resp.data.user;
        console.log("User:", user);
        dispatch(authUser(user));
        navigate("/");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/auth/login");
        } else {
          // Handle other errors
          console.error("Error:", error);
        }
      }
    };

    fetchUserData();
  }, [dispatch, navigate]);

  return <>{children}</>;
};

export default AuthRoute;
