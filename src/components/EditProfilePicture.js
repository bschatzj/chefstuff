import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateUser, getChef } from "../utils/actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const EditProfilePicture = props => {
  const [imgToUpdate, setImgToUpdate] = useState({
    user_picture: ""
  });
  console.log("this is state", imgToUpdate);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axiosWithAuth()
      .get(`/user/user/${userId}`)
      .then(res => {
        setImgToUpdate(res.data[0]);
      })
      .catch(err => {
        console.log(err.response);
      });

    console.log("i'm the useEffect");
  }, [userId]);
  console.log(props);

  const handleSubmit = e => {
    e.preventDefault();
    props.updateUser(imgToUpdate, userId);
    props.history.push(`/chefdashboard/${localStorage.getItem("userId")}`);
  };

  const changeHandler = e => {
    setImgToUpdate({ ...imgToUpdate, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-pic-div">
      <div>
        <h1>Edit Profile Picture</h1>
      </div>
      <div className="image-div">
        <img src={imgToUpdate.user_picture} alt=":)" />
      </div>
      <form className="profile-pic-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_picture"
          value={imgToUpdate.user_picture}
          onChange={changeHandler}
          placeholder="Insert Image URL"
          className="profile-pic-input"
        />
        <button type="submit" className="profile-pic-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    chefInfo: state.chefInfo
  };
};

export default connect(mapStateToProps, { updateUser, getChef })(
  EditProfilePicture
);
