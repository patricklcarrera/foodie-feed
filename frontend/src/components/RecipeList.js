import React from 'react';
import Recipe from './Recipe'
import Search from './Search'
import Header from './Header'


export default function RecipeList({setComments,comments, onDeleteRecipe, recipeList, searchTerm, changeSearch, addToSaved, users, handleDelete, addComment}){


    const recipes = recipeList.map(recipe => <Recipe 
        comments={comments}
        key={recipe.id}
        onDeleteRecipe={onDeleteRecipe}  
        handleDelete={handleDelete}
        addToSaved={addToSaved}
        recipe={recipe} 
        users={users}
        addComment={addComment}
        setComments={setComments}
        />)
    
        console.log(users)

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
