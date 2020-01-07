import React from "react";
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
const RecipeImg = props => {
  return (
    <div>
      <Card>
        <CardImg
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "10px",
            marginTop: "20px",
            marginRight: "20px"
          }}
          src={Image}
          class="img-thumbnail"
          alt="pancakes"
        />
        <CardImg
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "10px",
            marginTop: "20px",
            marginRight: "20px"
          }}
          src={Chicken}
          class="img-thumbnail"
          alt="pancakes"
        />
        <CardImg
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "10px",
            marginTop: "20px",
            marginRight: "20px"
          }}
          src={Fish}
          class="img-thumbnail"
          alt="pancakes"
        />
        <CardImg
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "10px",
            marginTop: "20px",
            marginRight: "20px"
          }}
          src={Soup}
          class="img-thumbnail"
          alt="pancakes"
        />
        <CardImg
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "10px",
            marginTop: "20px",
            marginRight: "20px"
          }}
          src={Sourdough}
          class="img-thumbnail"
          alt="pancakes"
        />
        <CardImg
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "10px",
            marginTop: "20px",
            marginRight: "20px"
          }}
          src={Veggie}
          class="img-thumbnail"
          alt="pancakes"
        />
        <CardImg
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "10px",
            marginTop: "20px",
            marginRight: "20px"
          }}
          src={Sushi}
          class="img-thumbnail"
          alt="pancakes"
        />
        <CardImg
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "10px",
            marginTop: "20px",
            marginRight: "20px"
          }}
          src={Corn}
          class="img-thumbnail"
          alt="pancakes"
        />
        <CardImg
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "10px",
            marginTop: "20px",
            marginRight: "20px"
          }}
          src={Choclate}
          class="img-thumbnail"
          alt="pancakes"
        />
        <CardImg
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "10px",
            marginTop: "20px",
            marginRight: "20px"
          }}
          src={Kale}
          class="img-thumbnail"
          alt="pancakes"
        />
        <CardImg
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "10px",
            marginTop: "20px",
            marginRight: "20px"
          }}
          src={Steak}
          class="img-thumbnail"
          alt="pancakes"
        />
      </Card>
    </div>
  );
};
export default RecipeImg;
