import React from 'react';
import Recipe from './Recipe'
import Search from './Search'
import Header from './Header'

export default function RecipeList({recipeList, searchTerm, changeSearch, comments}){

//    const recipes = recipeList.map(recipe => (
//     <Recipe recipe={recipe} />
//    ))

    return(
        <div>
            <Header/>
            <Search
                searchTerm = {searchTerm}
                changeSearch= {changeSearch}/>
            {recipeList.map(recipe => <Recipe recipeList={recipe} comments={comments}/>)}
            {/* {comments.map(comment => <Recipe comment={comment}/>)} */}
        </div>
  )
 }
