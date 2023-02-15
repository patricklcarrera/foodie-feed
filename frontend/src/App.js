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
  const [savedRecipes, setSavedRecipes] = useState([])
  const [searchTerm, setSearch] = useState("")
  const [ users, setUsers ] = useState([])
  
  //change value on search bar
  const changeSearch = (value) => {
    setSearch(value)
  }

  // helper function for adding to save
  const addToSaved = (newSavedRecipe) => {
    setSavedRecipes([...savedRecipes,newSavedRecipe])
  }


 
  //initial fetch all recipes
  //fetches recipe data from db

  useEffect(()=> {
    fetch("http://localhost:9292/recipes")
    .then(r => r.json())
    .then(data => {
      setRecipeList(data)})
  }, [])


  //initial fetch all comments



  //display a list of recipes via search: recipe name

  const filteredRecipes = recipeList.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))


  //fetches user data from db
  useEffect(()=> {
      fetch("http://localhost:9292/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data)})
    }, [])
 
  const onAddUser = newUser => {
    const newUserList = [...users, newUser]
    setUsers(newUserList)
  }
  
  //Add a recipe to the List of recipes
    const addRecipe = (newRecipe) => {
    const updatedRecipes = [...recipeList, newRecipe];
    setRecipeList(updatedRecipes)
  }
  //helper function for adding to saved recipes
 
  return (
    <div>
            <Routes>
              <Route 
                path="/" 
                 element={<Login users={users}/>}
                />
                 <Route 
                path="/savedrecipes" 
                 element={<SavedRecipes
                  savedRecipes={savedRecipes}
                  />}
                />
              <Route 
                path="/recipes/new" 
                element={<AddRecipe 
                  addRecipe={addRecipe} 
                  setRecipeList={setRecipeList}/>}
                />
              <Route 
                path="/recipes" 
                  element={<RecipeList 
                    recipeList={filteredRecipes}
                    searchTerm={searchTerm}
                    changeSearch={changeSearch} 
                    addToSaved={addToSaved}
                  />}
                          />
              <Route 
                path="/signup" 
                element={<Signup
                   users={users} 
                   onAddUser={onAddUser}/>}
                />
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