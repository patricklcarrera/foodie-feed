import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import RecipeList from './components/RecipeList';
import SavedRecipes from './components/SavedRecipes';
import Signup from './components/Signup';
import AddRecipe from './components/AddRecipe';
import { Route, Routes } from 'react-router-dom';

function App() {

  
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
                path="/addrecipe" 
                element={<AddRecipe/>}/>
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