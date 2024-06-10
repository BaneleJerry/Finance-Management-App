import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

const App = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
