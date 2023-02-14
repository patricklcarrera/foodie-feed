import React from 'react';
import Recipe from './Recipe'
import Search from './Search'
import Header from './Header'

export default function RecipeList({recipeList, searchTerm, changeSearch}){

//    const recipes = recipeList.map(recipe => (
//     <Recipe recipe={recipe} />
//    ))

    return(
        <div>
            <Header/>
            <Search
                searchTerm = {searchTerm}
                changeSearch= {changeSearch}/>
            {recipeList.map(recipe => <Recipe recipeList={recipe}/>)}
        </div>
  )
 }
