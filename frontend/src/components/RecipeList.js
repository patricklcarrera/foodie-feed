import React from 'react';
import Recipe from './Recipe'
import Search from './Search'
import Header from './Header'


export default function RecipeList({ onDeleteRecipe, recipeList, searchTerm, changeSearch, addToSaved, users, handleDelete, addComment}){


    const recipes = recipeList.map(recipe => <Recipe 
        key={recipe.id}
        onDeleteRecipe={onDeleteRecipe}  
        handleDelete={handleDelete}
        addToSaved={addToSaved}
        recipe={recipe} 
        users={users}
        addComment={addComment}
        />)
    


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
