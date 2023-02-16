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
    
        console.log({users})

    return(
        <>
        <Header/>
        <Search
                searchTerm = {searchTerm}
                changeSearch= {changeSearch}/>
        <div class="row row-cols-5 g-3" >
          
            {recipes} 
        </div>
        </>
)
}
