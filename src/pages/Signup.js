import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = ({ signup }) => {
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
    signup(userInfo);
    navigate("/");
    e.target.reset(); // reset the form
  };

  return (
    <div className="signup-container">
      <section className="signup-section">
        <div className="form-container">
          <form className="signup-form" ref={formRef} onSubmit={handleSubmit}>
            <p className="text-1">New here? Sign up for free</p>
            Email:{" "}
            <input
              className="signup-input"
              type="Email"
              name="Email"
              placeholder="Email"
            />
            Password:{" "}
            <input
              className="signup-input"
              type="Password"
              name="Password"
              placeholder="Password"
            />
            Confirm Password:{" "}
            <input
              className="signup-input"
              type="Password"
              name="Password_Confirmation"
              placeholder="Confirm password"
            />
            <button className="my-button-signup" type="submit" value="Submit">
              Submit
            </button>
          </form>
        </div>

        <div className="image-container">
          <img
            src="https://gwrench.com/wp-content/uploads/2023/03/CarRepairVista.jpeg"
            alt="Cars Image Placeholder"
          />
        </div>
        {/* <div>
        {" "}
        Already registered? <a href="/login">Login</a>
      </div> */}
      </section>
    </div>
  );
};

export default Signup;
