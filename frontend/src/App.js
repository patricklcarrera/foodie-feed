import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import SavedRecipes from './components/SavedRecipes';
import Signup from './components/Signup';
import AddRecipe from './components/AddRecipe';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
        {/* <Routes>
              <Route path ="/login">
                <Login />
              </Route>
              <Route path ="/signup">
                <Signup />
              </Route>
              <Route path ="/home">
                <Home />
              </Route>
              <Route path ="/savedrecipes">
                <SavedRecipes />
              </Route>
              <Route path ="/addrecipe">
                <AddRecipe />
              </Route>
      
        </Routes> */}
    </>
  );
}

export default App;
