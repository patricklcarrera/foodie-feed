import React from 'react';

export default function Recipe({recipe,handleClick}){


  
    return (
        <div>
            <h1>{recipe.name}</h1>
            <h2>{recipe.description}</h2>
            <h2>{recipe.ingredients}</h2>
            <h2>{recipe.instructions}</h2>
            <img src={recipe.image}/>
            <button onClick={()=> handleClick(recipe)}>Save</button>
        </div>
    )
    
}