import React from "react";

const CreateRecipe = () => {
    return (
        <div>
          <h2 className="title">Create New Recipe</h2>
            <div className="add-form">
              <form>
                <span>
                   <p>Recipe Name</p>
                    <input 
                      className="name"
                      type="text"
                      name="Recipe Name"/>
                </span>
                <span>
                  <p>Type</p>
                    <input 
                      className="type"
                      type="text"
                      name="Type"/>
                </span>
                <span>
                  <p>Theme</p>
                    <input 
                      className="theme"
                      type="text"
                      name="Theme"/>
                </span>
                <span>
                  <p>Prep Time</p>
                    <input 
                      type="text"
                      name="Prep Time"/>
                </span>
                <span>
                  <p>Cook Time</p>
                    <input 
                      type="text"
                      name="Cook Time"/>
                </span>
                <span>
                  <p>Servings</p>
                    <input 
                      type="text"
                      name="Servings"/>
                </span>
                <div>
                    <h2>Add Photos/Videos<i class="fa fa-file-image-o"></i></h2>
                </div>
                <div>
                    <p className="bottom-text">Add Ingredients</p>
                    <textarea
                        className="ingredients"
                        type="text"
                        name="Ingredients"
                        placeholder="Ingredients:"
                        rows="10"
                        cols="60">
                    </textarea>
                </div>
                <div>
                    <p className="bottom-text">Add Instructions</p>
                    <textarea
                        className="directions"
                        type="text"
                        name="Directions"
                        placeholder="Directions:"
                        rows="10"
                        cols="30">
                    </textarea>
                </div>
                <div>
                    <p className="bottom-text">Additional Notes</p>
                    <textarea
                        className="notes"
                        type="text"
                        name="Additional Notes"
                        rows="10"
                        cols="30">
                    </textarea>
                </div>
                <button>Create Post</button>
              </form>
              
            </div>
        </div>
    )
}

export default CreateRecipe;