import React from 'react';

export default function Recipe({recipeList, comments}){
    const handleClick = () => {
        comments.map(comment => console.log(comment));
    }
    return (
        <div>
            <h1>{recipeList.name}</h1>
            <h2>{recipeList.description}</h2>
            <h2>{recipeList.ingredients}</h2>
            <h2>{recipeList.instructions}</h2>
            <img src={recipeList.image}/>
            <button onClick={handleClick}>view comments</button>
        </div>
    )
    
}