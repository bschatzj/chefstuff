import React, { useEffect, useState } from "react";
import Image from "../img/pancakes.jpg";
import Chicken from "../img/chicken.jpg";
import Fish from "../img/fish.jpg";
import Soup from "../img/soup.jpg";
import Sourdough from "../img/sourdough.jpg";
import Sushi from "../img/sushi.jpg";
import Veggie from "../img/veggie.jpg";
import Corn from "../img/corn.jpg";
import Choclate from "../img/chocolate.jpg";
import Kale from "../img/kale.jpg";
import Steak from "../img/steak-veggies.JPG";
import { Card, CardImg } from "reactstrap";
import { connect } from "react-redux";
import { getRecipe } from "../utils/actions";
const RecipeImg = props => {
  const [recepies, setRecepies] = useState();
  console.log(recepies);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    props.getRecipe(userId);
    setRecepies(props.recipe);
  }, []);
  console.log("this is props", props);
  return (
    <div>
      <Card>
        {props.chefInfo &&
          props.recipe &&
          props.recipe.map(value => {
            console.log(value);
            return (
              <CardImg
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "10px",
                  marginTop: "20px",
                  marginRight: "20px"
                }}
                src={value.recipe_photo}
                class="img-thumbnail"
                alt="sushi"
              />
            );
          })}
      </Card>
    </div>
  );
};
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { getRecipe })(RecipeImg);
