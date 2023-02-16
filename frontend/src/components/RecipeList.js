import React from 'react';
import Recipe from './Recipe'
import Search from './Search'
import Header from './Header'

export default function RecipeList({recipeList, searchTerm, changeSearch, addToSaved, users, addComment}){


    const recipes = recipeList.map(recipe => <Recipe addToSaved={addToSaved} key = {recipe.id} recipe={recipe} users={users} addComment={addComment}/>)
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
