import React from 'react';


export default function Recipe({recipe, comments, addToSaved}){
    const handleClick = () => {
        comments.map(comment => console.log(comment));
    }
    return (
        <div>
            <h1>{recipe.name}</h1>
            <h2>{recipe.description}</h2>
            <h2>{recipe.ingredients}</h2>
            <h2>{recipe.instructions}</h2>
            <img src={recipe.image}/>
            <button onClick={handleClick}>view comments</button>
            <button onClick={()=> addToSaved(recipe)}>Save</button>
        </div>
    )
    
}