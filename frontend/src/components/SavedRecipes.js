import React from 'react';
import Header from './Header';
import Recipe from './Recipe';

export default function SavedRecipes({savedRecipes}){

    
    return (
        <div>
            <Header/>
                <div>
              {savedRecipes.map(recipe =>(
                <Recipe recipe={recipe}/>
              ))}
                </div>
        </div>
    )
    
}