import React, { useState} from 'react';


export default function Recipe({recipe, comments, addToSaved}){


    const handleClick = () => {
        comments.map(comment => console.log(comment));}

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
            <button onClick={handleClick}>view comments</button>
            <button onClick={()=> addToSaved(recipe)}>Save</button>
        </div>


    const back = 
        <div>
            <h1>{recipe.name}</h1>
            <h3>{recipe.description}</h3>
            <h3>{recipe.ingredients}</h3>
            <h3>{recipe.instructions}</h3>
            <img src={recipe.image} onClick={handleFlip}/>
            <button onClick={handleClick}>view comments</button>
            <button onClick={()=> addToSaved(recipe)}>Save</button>
        </div>
    // show all details on click function

    // display either the front or back depending on the current State
  return (
    isBack ? back : front
  )
}

