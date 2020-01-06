import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateUser, getChef } from "../utils/actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";
const EditInfo = props => {
  const [userToUpdate, setUserToUpdate] = useState({
    full_name: "",
    location: "",
    phone: "",
    email: ""
  });
  console.log("this is state", userToUpdate);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axiosWithAuth()
      .get(`/user/user/${userId}`)
      .then(res => {
        setUserToUpdate(res.data[0]);
      })
      .catch(err => {
        console.log(err.response);
      });

    console.log("i'm the useEffect");
  }, [userId]);
  console.log(props);

  const handleSubmit = e => {
    e.preventDefault();
    props.updateUser(userToUpdate, userId);
    props.history.push(`/chefdashboard/${localStorage.getItem("userId")}`);
  };

  const changeHandler = e => {
    setUserToUpdate({ ...userToUpdate, [e.target.name]: e.target.value });
  };

  return (
    <div className="info-div">
      <div>
        <h1>Edit Info</h1>
      </div>
      <form className="info-form" onSubmit={handleSubmit}>
        <label className="info-labels">Full Name</label>
        <input
          type="text"
          name="full_name"
          className="info-inputs"
          value={userToUpdate.full_name}
          onChange={changeHandler}
        />

        <label className="info-labels">Email</label>
        <input
          type="text"
          name="email"
          className="info-inputs"
          value={userToUpdate.email}
          onChange={changeHandler}
        />

        <label className="info-labels">Location</label>
        <input
          type="text"
          name="Location"
          className="info-inputs"
          value={userToUpdate.Location}
          onChange={changeHandler}
        />

        <label className="info-labels">Phone Number</label>
        <input
          type="text"
          name="phone"
          className="info-inputs"
          value={userToUpdate.phone}
          onChange={changeHandler}
        />
        <div className="info-button-div">
          <button className="info-button" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    chefInfo: state.chefInfo
  };
};

export default connect(mapStateToProps, { updateUser, getChef })(EditInfo);
