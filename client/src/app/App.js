import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import AuthRoute from "../components/Auth/AuthRoute";

const App = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element= {
          <AuthRoute>
            <h1>Home Page</h1>
          </AuthRoute>
        }></Route>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
