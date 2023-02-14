import React from 'react';
import Recipe from './Recipe'

export default function RecipeList({recipeList}){
   console.log(recipeList)
//    const recipes = recipeList.map(recipe => (
//     <Recipe recipe={recipe} />
//    ))

    return(
        <div>
            {recipeList.map(recipe => <Recipe recipeList={recipe}/>)}
        </div>
  )
 }
