import React from 'react';
import { useState } from 'react';
import Header from './Header';

export default function Recipe({recipeList,savedItems,setSavedItems}){

    // const onAddtoSaved = (recipe) => {
    //     const yourSavedRecipes = savedItems.find((saved) => saved.id === recipe.id)
    //     if (yourSavedRecipes) {
    //       const newSavedRecipes = savedItems.map((saved) => 
    //       saved.id === recipe.id ? {...yourSavedRecipes, recipe} : saved
    //       ) 
    //       setSavedItems(newSavedRecipes)
    //     } else {
    //       const newSavedRecipes = [...savedItems, recipe]
    //       setSavedItems(newSavedRecipes)
    //     }
    //   }

    return (
        <div>
            
            <h1>Name: {recipeList.name}</h1>
            <h2>Description: {recipeList.description}</h2>
            <h2>Ingredient List: {recipeList.ingredients}</h2>
            <h2>Instructions: {recipeList.instructions}</h2>
            <img src= {recipeList.recipe_image}/>
            {/* <button onClick={() => onAddtoSaved(recipe)}>Add to Saved Recipe</button> */}
        </div>
    )
    
}