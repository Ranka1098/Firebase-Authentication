import React from "react";
import RegisterForm from "./componet/RegisterForm";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
