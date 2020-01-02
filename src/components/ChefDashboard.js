import React from "react";
import { Link } from "react-router-dom";
import Image from "../ChefRamsay.jpg";
import ChefRecipes from "./ChefRecipes.js";
const ChefDashboard = props => {
  return (
    <div className="dashboard-body">
      <div className="inner-body">
        <div className="left-div">
          <div className="img-div">
            <Link to="/edit-profile-picture">
              <img className="chef-img" src={Image} alt="Chef" />
              <i
                className="far fa-edit"
                style={{
                  color: "white",
                  marginTop: "55%",
                  fontSize: "20px"
                }}
              ></i>
            </Link>
          </div>

          <div className="chef-info">
            <Link to="/edit-info" style={{ textDecoration: "none" }}>
              <h3>
                Personal Info{" "}
                <i class="far fa-edit" style={{ color: "white" }}></i>
              </h3>
            </Link>

            <span>
              <i class="far fa-user"></i> Gordon Ramsay
            </span>
            <span>
              <i class="far fa-envelope"></i> Gordonram@email.com
            </span>
            <span>
              <i class="fas fa-location-arrow"></i> Johnstone, UK
            </span>
            <span>
              <i class="fas fa-phone-alt"></i> 801-258-1545
            </span>
          </div>
        </div>

        <div className="right-div">
          <div className="name-div">
            <h1>Gordon Ramsay</h1>

            <h2>Johnstone, UK</h2>
          </div>

          <div className="about-div">
            <Link to="/edit-about" style={{ textDecoration: "none" }}>
              <h2>About:</h2>
              <p>
                Gordon James Ramsay OBE (born 8 November 1966) is a British
                chef, restaurateur, writer, television personality and food
                critic. He was born in Johnstone, Scotland, and raised in
                Stratford-upon-Avon, England. His restaurants have been awarded
                16 Michelin stars in total and currently hold a total of seven.
              </p>
              <i
                class="far fa-edit"
                style={{ color: "white", fontSize: "20px" }}
              ></i>
            </Link>
          </div>
          <div className="recipes-div">
            {/* <h3>Recipes</h3> */}
            <span>
              Recipes{" "}
              <Link to="/add-recipe">
                <i
                  class="fas fa-plus"
                  style={{
                    border: "2px solid  #07fe20",
                    borderRadius: "20px",
                    padding: "3px",
                    fontSize: "20px",
                    color: "white"
                  }}
                ></i>
              </Link>
            </span>
          </div>
          <div>
            <ChefRecipes />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChefDashboard;
