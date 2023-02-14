import React from 'react';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import RecipeList from './components/RecipeList';
import SavedRecipes from './components/SavedRecipes';
import Signup from './components/Signup';
import AddRecipe from './components/AddRecipe';
import { Route, Routes } from 'react-router-dom';

function App() {


  //state
  const [recipeList, setRecipeList] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/recipes")
    .then(r => r.json())
    .then(data => {
      setRecipeList(data)})
  }, [])


   //Add a recipe to the List of recipes
  const addRecipe = (newRecipe) => {
    const updatedRecipes = [...recipeList, newRecipe];
    setRecipeList(updatedRecipes)
  }

  return (
    <div>
            <Routes>
              <Route 
                path="/" 
                element={<Login/>}/>
              <Route 
                path="/savedrecipes" 
                element={<SavedRecipes/>}/>
              <Route 
                path="/recipes/new" 
                element={<AddRecipe addRecipe={addRecipe} setRecipeList={setRecipeList}/>}/>
              <Route 
                path="/recipes" 
                element={<RecipeList recipeList={recipeList}/>}/>
              <Route 
                path="/signup" 
                element={<Signup/>}/>
            </Routes>
    </div>
  );
}

export default App;




// <Route path ="/login">
// <Login />
// </Route>
// <Route path ="/signup">
// <Signup />
// </Route>
// <Route path ="/home">
// <Home />
// </Route>
// <Route path ="/savedrecipes">
// <SavedRecipes />
// </Route>
// <Route path ="/addrecipe">
// <AddRecipe />
// </Route>