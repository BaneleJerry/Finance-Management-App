import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import AuthForm from "../components/Auth/AuthForm";

const App = () => {
  return (
    <>
    <Login />
    </>

    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/login" component={Login} />
    //       <Route path="/register" component={Register} />
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;
