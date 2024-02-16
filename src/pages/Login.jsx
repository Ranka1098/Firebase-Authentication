import React, { useState ,useEffect} from "react";
import { usefirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = usefirebase();
  const navigate = useNavigate()
  console.log(firebase);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("log in a user");
    const result = await firebase.login(email, password);
    console.log("sucessfully log in", result);
  };

  useEffect(()=>{
  if(firebase.loggedIn){
  // navigate to home
  navigate("/")

  }
  },[firebase ,navigate])

  return (
    <div>
      <h1>Login</h1>
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
        <button>Login</button>
      </form>
      <br />
      <br />
      <button onClick={firebase.SignInWithGoogle}>Signin-with-google </button>
    </div>
  );
};

export default Login;
