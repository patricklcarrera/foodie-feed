import React from 'react';
import Recipe from './Recipe'
import Search from './Search'
import Header from './Header'

export default function RecipeList({recipeList, searchTerm, changeSearch,addToSaved}){

    const recipes = recipeList.map(recipe => <Recipe handleClick={addToSaved} recipe={recipe}/>)

    return(
        <div>
            <Header/>
            <Search
                searchTerm = {searchTerm}
                changeSearch= {changeSearch}/>
            {recipes}
        </div>
  )
 }
