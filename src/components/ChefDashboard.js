import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getChef } from "../utils/actions";
import RecipeImg from "./RecipeImg";
import '../App.css';
const ChefDashboard = props => {
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    props.getChef(userId);
  }, []);
  useEffect(() => {
    if (!localStorage.getItem('reload')) {
      window.location.reload()
      localStorage.setItem("reload", "loaded")
    }
  }, []);


  const [troll, setTroll] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [tryNumber, setTryNumber] = useState(0);
  const [answer, setAnswer] = useState("");

  const audio = new Audio("http://soundbible.com/grab.php?id=138&type=mp3")
  const audio2 = new Audio("http://soundbible.com/grab.php?id=1691&type=mp3")
  const audio3 = new Audio("http://soundbible.com/grab.php?id=1&type=mp3")

  const enter = e => {
    if (e.keyCode === 13) {
      audio.play()
      localStorage.setItem("activated", "YOU HAVE BEEN ACTIVATED")
    }
  }



  const brendan = e => {
      if (e.keyCode === 13 && troll == false) {
        if (localStorage.getItem("activated")) {
          setTroll(true)
          alert("You are a bus driver, 8 people get on, 2 people get off, 2 more people get on and another 1 get off. Finally, 3 more people get on and 2 get off again. What is the bus drivers name?")
        };
      }
    }


  const trolling = e => {
    console.log("hello")
    e.preventDefault()
    if (answer.toLowerCase().includes((props.chefInfo.full_name).toLowerCase())) {
      setCorrect(true)
      audio3.play()
      alert(`${props.chefInfo.full_name} you earned this....`)
    }
    else {
      setTryNumber(tryNumber + 1)
      alert("WRONG!!!!")
      audio2.play()
    }
  }


  const handleChanges = e => {
    setAnswer(e.target.value);
    console.log(answer)
  };

  document.addEventListener("keydown", enter)
  document.addEventListener('keydown', brendan)



  console.log(props);
  return (
    <>
      <div className="dashboard-body">
        <div className="inner-body">
          <div className="left-div">
            <div className="img-div">
              <Link to="/edit-profile-picture/:id">
                <img
                  className="chef-img"
                  src={props.chefInfo.user_picture}
                  alt="Chef"
                />
                <br />
                <i id="iconImg" className="far fa-edit"></i>
              </Link>
            </div>

            <div className="chef-info">
              <Link
                to={`/edit-info/${localStorage.getItem("userId")}`}
                style={{ textDecoration: "none" }}
              >
                <h3>
                  Personal Info <i id="iconInfo" class="far fa-edit"></i>
                </h3>
              </Link>

              <span>
                <i class="far fa-user"></i> {props.chefInfo.full_name}
              </span>
              <span>
                <i class="far fa-envelope"></i> {props.chefInfo.email}
              </span>
              <span>
                <i class="fas fa-location-arrow"></i> {props.chefInfo.Location}
              </span>
              <span>
                <i class="fas fa-phone-alt"></i> {props.chefInfo.phone}
              </span>
            </div>
          </div>

          <div className="right-div">
            <div className="name-div">
              <h1>{props.chefInfo.full_name}</h1>

              <h2>{props.chefInfo.Location}</h2>
            </div>

            <div className="about-div">
              <Link
                to={`/edit-about/${localStorage.getItem("userId")}`}
                style={{ textDecoration: "none" }}
              >
                <h2>About:</h2>
                <p>{props.chefInfo.Bio}</p>
                <i id="iconAbout" class="far fa-edit"></i>
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
              <RecipeImg />
              <div className={troll ? "troll" : "notTroll"}>

                <input onChange={handleChanges}></input>
                <button onClick={trolling}>This is your {tryNumber} try</button>


                <Link to="/brendan" className={correct ? "correct" : "incorect"}>
                  <button>There is no going back</button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = state => {
  return {
    chefInfo: state.chefInfo,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { getChef })(ChefDashboard);
