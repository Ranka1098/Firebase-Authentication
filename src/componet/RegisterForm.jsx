import React, { useState } from "react";
import { usefirebase } from "../context/Firebase";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = usefirebase();
  console.log(firebase);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("signup user");
    const result = await firebase.signUp(email, password);
    console.log("sucessfull", result);
  };
  return (
    <div>
      <h1>SignUp Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input
          type="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email here..."
        />
        <br />
        <label>PassWord</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password here..."
          autoComplete="off"
        />
        <br />
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default RegisterForm;
