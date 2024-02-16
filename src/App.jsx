import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./componet/RegisterForm";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ListingPage from "./pages/ListingPage";
import NavBar from "./pages/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<Login />} />
        <Route path="book/list" element={<ListingPage />} />
      </Routes>
    </div>
  );
};

export default App;
