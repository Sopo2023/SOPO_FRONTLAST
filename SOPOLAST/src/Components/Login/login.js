import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import "./login.css";
import LOGO from "../../Assets/image/LOGO.png";
import axios from "axios";

function LoginComponent() {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    /*... */
  }, [msg]);

  const LOginFunc = (e) => {
    e.preventDefault();
 
  };

  return (
    <div className="App">
      <div className="greenbox">
        <img src={LOGO}></img>
      </div>
      <div className="box1">
        <p>Log in</p>
        <form onSubmit={LOginFunc}>
          <input
            className="id-Email"
            type="text"
            placeholder="E-Mail"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
          <input
            className="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button type="submit" className="button">
            Log in
          </button>
          {msg}
          <Link to="/Signuppage">sign up</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
