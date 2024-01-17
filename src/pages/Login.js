import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ login }) => {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    login(userInfo);
    // navigate("/")
  };

  return (
    <>
      <div className="login-container">
        <section className="login-section">
          <div className="welcome-div">
            <h1 className="welcome-text-1">Welcome Back!</h1>
            <p className="login-text">
              Sign in to access your AutoForge account.
            </p>
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
              Password:{" "}
              <input
                id="login-id"
                className="login-input"
                type="password"
                name="password"
                placeholder="Password"
              />
              <button className="my-button" type="submit" value="Submit">
                Login
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;