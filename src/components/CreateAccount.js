import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const CreateAccount = props => {
  return (
    <div className="outter-register">
      <div className="register-page">
        <form>
          <h2>
            Sign Up for <span>Chef</span>Port<span>.</span>
          </h2>

          <div className="register-title">
            <h3>Your Information</h3>
          </div>
          <input type="text" name="name" placeholder="Full Name" />
          <input
            type="location"
            name="location"
            placeholder="Location(state)"
          />
          <input type="tel" name="phonenumber" placeholder="Phone Number" />
          <div className="register-title">
            <h3>Log In Information</h3>
          </div>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <div>
            <Link to="/login">
              <button>Sign Up</button>
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "#FE0707",
                fontSize: "14px",
                fontWeight: "bold"
              }}
              to="/login"
            >
              Already have an Account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
