import React, { useState} from 'react';


export default function Recipe({onDeleteRecipe, recipe, addToSaved, users}){
    const {id} = recipe
        const handleDelete = () => {
        fetch(`http://localhost:9292/recipes/${id}}`,
        { method: 'DELETE' })
        .then(() => onDeleteRecipe(id))
        .catch(err => alert(err))
    }
    const [viewComments, setViewComments] = useState(false)
    const handleClick = () => {
    // comments = recipe.comments.map(comment => comment.content)
    setViewComments(prev => !prev)
    };
    const recipeComments = recipe.comments.map(comment => comment.content)
    const eachComment = recipeComments.forEach(content => content)
    // const commentsUser = users.map(user => user.username)

    
        const [isBack, setIsBack] = useState(false);

        //updates the state of isBack
        const handleFlip = () => {
            setIsBack(prev => !prev)
        }
    // only show photo and name
    const front = 
        <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} onClick={handleFlip}/>
            {viewComments ? <button onClick={handleClick}>hide</button> : <button onClick= {handleClick}> view comments </button>}
            {viewComments ?  <p> {eachComment} </p>: ''}
            <button onClick={()=> addToSaved(recipe)}>Save</button>
            <button onClick={() => handleDelete()}>Delete</button>
        </div>


    const back = 
        <div>
            <h1>{recipe.name}</h1>
            <h3>{recipe.description}</h3>
            <h3>{recipe.ingredients}</h3>
            <h3>{recipe.instructions}</h3>
            <img src={recipe.image} onClick={handleFlip}/>
            {viewComments ? <button onClick={handleClick}>hide</button> : <button onClick= {handleClick}> view comments </button>}
            {viewComments ?  <p> {recipeComments} </p>: ''}
            <button onClick={()=> addToSaved(recipe)}>Save</button>
            <button onClick={() => handleDelete()}>Delete</button>
        </div>
    // show all details on click function

    // display either the front or back depending on the current State
  return (
    isBack ? back : front
  )
  }
