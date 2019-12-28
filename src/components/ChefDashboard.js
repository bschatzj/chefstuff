import React from "react";
import { Link } from "react-router-dom";
import Image from "../ChefRamsay.jpg";

import ChefRecipes from './ChefRecipes.js';

const ChefDashboard = props => {
  return (
    <div className="dashboard-body">
      <div className="inner-body">
        <div className="left-div">
          <div className="img-div">
            <img className="chef-img" src={Image} alt="Chef" />
          </div>

          <div className="chef-info">
            <h3>Personal Info</h3>
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
            <h2>About:</h2>
            <p>
              Gordon James Ramsay OBE (born 8 November 1966) is a British chef,
              restaurateur, writer, television personality and food critic. He
              was born in Johnstone, Scotland, and raised in
              Stratford-upon-Avon, England. His restaurants have been awarded 16
              Michelin stars in total and currently hold a total of seven.
            </p>
          </div>
          <div className="recipes-div">
            {/* <h3>Recipes</h3> */}
            <span>
              Recipes
              <Link to="/add-recipe">
              <i class="far fa-edit"></i>
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
