import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateUser, getChef } from "../utils/actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
const EditAbout = props => {
  const [bioToUpdate, setBioToUpdate] = useState({
    Bio: ""
  });
  console.log("this is state", bioToUpdate);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axiosWithAuth()
      .get(`/user/user/${userId}`)
      .then(res => {
        setBioToUpdate(res.data[0]);
      })
      .catch(err => {
        console.log(err.response);
      });

    console.log("i'm the useEffect");
  }, [userId]);
  console.log(props);

  const handleSubmit = e => {
    e.preventDefault();
    props.updateUser(bioToUpdate, userId);
    props.history.push(`/chefdashboard/${localStorage.getItem("userId")}`);
  };

  const changeHandler = e => {
    setBioToUpdate({ ...bioToUpdate, [e.target.name]: e.target.value });
  };
  return (
    <div className="about-edit-div">
      <div>
        <h1>Edit About</h1>
      </div>
      <form className="about-form" onSubmit={handleSubmit}>
        {/* <label className="about-label"> About:</label> */}
        <textarea
          rows="15"
          cols="70"
          style={{
            backgroundColor: "transparent",
            border: "2px solid #07fe20",
            fontSize: "20px",
            color: "#f3ffef",
            width: "80%"
          }}
          type="text"
          name="Bio"
          value={bioToUpdate.Bio}
          onChange={changeHandler}
          placeholder="Share a little bit about yourself here! Why you love to cook and why you want to share some of your awesome recipes!"
          className="about-input"
        />
        {/* <Link to={`/chefdashboard/${localStorage.getItem("userId")}`}> */}
        <button className="about-button" type="submit">
          Save Changes
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    chefInfo: state.chefInfo
  };
};

export default connect(mapStateToProps, { updateUser, getChef })(EditAbout);
