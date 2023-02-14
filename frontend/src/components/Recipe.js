import React from 'react';

export default function Recipe({recipeList}){

    return (
        <div>
            <h1>{recipeList.name}</h1>
            <h2>{recipeList.description}</h2>
            <h2>{recipeList.ingredients}</h2>
            <h2>{recipeList.instructions}</h2>
            <img src={recipeList.image}/>
        </div>
    )
    
}