import React, { useEffect, useState } from "react";

const RecipeImg = props => {
  useEffect(() => {
    setTimeout(() => {
      props.history.push(`/chefdashboard/${localStorage.getItem("userId")}`);
    }, 4000);
  }, []);

  return (
    <div className="load-page">
      <div className="spinner-div">
        <i
          id="spinner"
          class="fas fa-utensils fa-7x fa-spin"
          style={{ color: "#07fe20" }}
        ></i>
      </div>
    </div>
  );
};

export default RecipeImg;
