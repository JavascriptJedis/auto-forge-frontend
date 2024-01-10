import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ login }) => {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //  store the form entries in variable
    const formData = new FormData(formRef.current);
    // create object from entries
    const data = Object.fromEntries(formData);
    //  put in format to use with JWT
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    login(userInfo);
    navigate("/");
  };

  return (
    <>
    <section className="login-section">
      <div className="welcome-div">
        <h1 className="welcome-text-1">Welcome!</h1>
        <br />
        <p className="login-text">Sign in to access your AutoForge account.</p>
      </div>

      <div className="form-container">
        <form className="login-form" ref={formRef} onSubmit={handleSubmit}>
          Email:{" "}
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Email"
          />
          <br />
          Password:{" "}
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <button className="my-button" to="/" type="submit" value="Submit">
            Login
          </button>
          <br />
        </form>
      </div>
    </section>  
    </>
  );
};

export default Login;

