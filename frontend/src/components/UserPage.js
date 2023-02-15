import React from 'react';
import Header from './Header'
import Recipe from './Recipe'

export default function UserPage({ recipeList, users, comments, addToSaved }) {

    //after recipeList and users load, filters through to find the recipes made by the first user, then maps over to create a Recipe card for each
    return(
        <div>
            hello
            {recipeList && users ? recipeList.filter(recipe => recipe.user_id === users[0].id).map(recipe => <Recipe key={recipe.id}recipe={recipe} comments={comments} addToSaved={addToSaved}/>) : <h1>Loading ...</h1>}
        </div>
    )
}