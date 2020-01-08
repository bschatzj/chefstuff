import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css';

const ChefRecipe = (props) => {
    let recipeid = (props.match.params.id)
    const [deleting, setDeleting] = useState(false);
    const [editing, setEditing] = useState(false)
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        axios.get(`https://backend-chef.herokuapp.com/api/recipes/recipeId/${recipeid}`)
            .then(res => {
                setRecipe(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    function remover() {
        axios.delete(`https://backend-chef.herokuapp.com/api/recipes/delete/${recipeid}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const editer = e => {
        e.preventDefault()
        console.log('hi')
        setEditing(false)
        axios.put(`https://backend-chef.herokuapp.com/api/recipes/update/${recipeid}`, recipe)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChanges = e => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="chef-recipe-div">
                <img src={recipe.recipe_photo} />
                <h2 className="title">{recipe.recipe_name}</h2>
                <div>
                    <div className="upperRecipe">
                    <h2>Cook Time:</h2>
                    <p>{recipe.cook_time}</p>
                    <h2>Prep Time:</h2>
                    <p>{recipe.prep_time}</p>
                    <h2>Servings:</h2>
                    <p>{recipe.servings}</p>
                    </div>
                    <h2>Ingredients</h2>
                    <p>{recipe.ingredients}</p>
                    <h2>Instructions</h2>
                    <p>{recipe.instructions}</p>
                </div>
                <div className="recipe-buttons-div">
                    <button onClick={() => { setEditing(true) }} className="edit-recipe-button">Edit</button>
                    <button onClick={() => { setDeleting(true) }} className="delete-recipe-button">Delete</button>
                </div>
            </div>

            <div className={deleting ? "modal" : "closed"}>
                <h1>Confirm Delete?</h1>
                <button onClick={() => { remover() }}>Confirm</button>
                <button onClick={() => { setDeleting(false) }}>Cancel</button>
            </div>





            <h1 className={editing ? "theX" : "closed"} onClick={() => { setEditing(false) }}>X</h1>
            <div className={editing ? "editModal" : "closed"}>
                <h1>Edit Recipe</h1>
                <form className="editForm" onSubmit={editer}>
                    <span>
                        <p>Recipe Name</p>
                        <input
                            className="name"
                            type="text"
                            name="recipe_name"
                            value={recipe.recipe_name}
                            onChange={handleChanges}
                        />
                    </span>
                    <span>
                        <p>Prep Time</p>
                        <input
                            type="text"
                            name="prep_time"
                            value={recipe.prep_time}
                            onChange={handleChanges}
                        />
                    </span>
                    <span>
                        <p>Cook Time</p>
                        <input
                            type="text"
                            name="cook_time"
                            value={recipe.cook_time}
                            onChange={handleChanges}
                        />
                    </span>
                    <span>
                        <p>Servings</p>
                        <input
                            type="text"
                            name="servings"
                            value={recipe.servings}
                            onChange={handleChanges}
                        />
                    </span>

                    <h2>
                        Add Photo<i class="fa fa-file-image-o"></i>
                    </h2>

                    <span>
                        <p>Image URL</p>
                        <input
                            className="name"
                            type="text"
                            name="recipe_photo"
                            value={recipe.recipe_photo}
                            onChange={handleChanges}
                        />
                    </span>
                    <div>
                        <p className="bottom-text">Add Ingredients</p>
                        <textarea
                            className="ingredients"
                            type="text"
                            name="ingredients"
                            placeholder="Ingredients:"
                            rows="10"
                            cols="80"
                            value={recipe.ingredients}
                            onChange={handleChanges}
                        ></textarea>
                    </div>
                    <div>
                        <p className="bottom-text">Add Instructions</p>
                        <textarea
                            className="directions"
                            type="text"
                            name="instructions"
                            placeholder="Directions:"
                            rows="10"
                            cols="80"
                            value={recipe.instructions}
                            onChange={handleChanges}
                        ></textarea>
                    </div>
                    <button className="editButton" type="submit">Edit Post</button>
                </form>
            </div>
        </>
    )
}

export default ChefRecipe;