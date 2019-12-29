import React from "react";

const EditAbout = () => {
  return (
    <div className="about-edit-div">
      <form className="about-form">
        <label className="about-label">About:</label>
        <textarea
          rows="13"
          cols="70"
          style={{
            backgroundColor: "transparent",
            border: "2px solid #07fe20",
            fontSize: "18px",
            color: "#f3ffef"
          }}
          type="text"
          name="about"
          placeholder="Write here a little bit about you! Why you love to cook and why you want to share some of your awesome recipes!"
          className="about-input"
        />

        <button className="about-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditAbout;
