import React from 'react';
import Header from './Header';
import Recipe from './Recipe';

export default function SavedRecipes({savedRecipes}){

  const handleRemove = () => {
    console.log("need to remove this")
  }  
  //show only saved recipe
  const savedRecipesToShow =  savedRecipes.map(recipe =>(
    <Recipe recipe={recipe}/>
  ))



    return (
        <div>
            <Header/>
                <div>
              {savedRecipesToShow}
              <button onClick={handleRemove}>remove from your saved recipes</button>
  
                </div>
                
        </div>
    )
    
}