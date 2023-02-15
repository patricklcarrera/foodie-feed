import React from 'react';
import Header from './Header'
import Recipe from './Recipe'

export default function UserPage({ recipeList, users, comments, addToSaved }) {

    //after recipeList and users load, filters through to find the recipes made by the first user, then maps over to create a Recipe card for each
    return(
        <div>
            <Header />
            <div>
                <img src={users[0].photo}/>
                <p>{users[0].username}</p>
                <p>{users[0].name}</p>
                <p>{users[0].bio}</p>
            </div>
            {recipeList && users ? recipeList.filter(recipe => recipe.user_id === users[0].id).map(recipe => <Recipe key={recipe.id}recipe={recipe} comments={comments} addToSaved={addToSaved}/>) : <h1>Loading ...</h1>}
        </div>
    )
}