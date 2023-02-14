import React from 'react';
import Recipe from './Recipe'
import Header from './Header';

export default function RecipeList({recipeList}){
   console.log(recipeList)


   const recipes = recipeList.map(recipe => <Recipe recipeList={recipe}/>)

    return(
        
        <div>
            <Header/>
            {recipes}
        </div>
  )
 }
