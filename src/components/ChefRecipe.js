import React, { useState } from "react";
import axios from "axios";

const ChefRecipe = (props) => {
    let recipeid = (props.match.params.id)
    const [recipe, setRecipe] = useState({})
    axios.get(`https://backend-chef.herokuapp.com/api/recipes/recipeId/${recipeid}`)
        .then(res => {
            setRecipe(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    return (
        <div className="chef-recipe-div">
            <h2>Ingredients</h2>
            <p>{recipe.ingredients}</p>
            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
            <div className="recipe-buttons-div">
                <button className="edit-recipe-button">Edit</button>
                <button className="delete-recipe-button">Delete</button>
            </div>
        </div>
    )
}

export default ChefRecipe;