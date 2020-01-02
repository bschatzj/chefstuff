import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from "react-redux";
import { postChefInfo } from "../utils/actions";

const CreateAccount = props => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    username: "",
    password: ""
  });
  // console.log(form);
  const handleSubmit = e => {
    e.preventDefault();
    props.postChefInfo(form);
    props.history.push("/login");
  };
  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(props);
  return (
    <div className="outter-register">
      <div className="register-page">
        <form onSubmit={handleSubmit}>
          <h2>
            Sign Up for <span>Chef</span>Port<span>.</span>
          </h2>

          <div className="register-title">
            <h3>Your Information</h3>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChanges}
          />
          <input
            type="location"
            name="location"
            placeholder="Location(state)"
            value={form.location}
            onChange={handleChanges}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChanges}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChanges}
          />
          <div className="register-title">
            <h3>Log In Information</h3>
          </div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChanges}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChanges}
          />
          <div>
            <button type="submit">Sign Up</button>

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
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { postChefInfo })(CreateAccount);
