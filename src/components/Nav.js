import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>
        <Link to="/"><span>Chef</span>Port<span>.</span></Link>
      </h1>
     <div>
        <div>
          <Link to="/">Profile</Link>
        </div>
        <div>
          <Link to="/">Recipes</Link>
        </div>
        <div>
          <Link to="/">Create Recipe</Link>
        </div>
     </div>
      <div className="sign-in-nav-button">
        <Link to="/login">Sign In</Link>
      </div>
    </nav>
  );
};

export default Nav;
