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
  const [ users, setUsers ] = useState([])

  //fetches recipe data from db
  useEffect(()=> {
    fetch("http://localhost:9292/recipes")
    .then(r => r.json())
    .then(data => {
      console.log(data)
      setRecipeList(data)})
  }, [])

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
  
  return (
    <div>
            <Routes>
              <Route 
                path="/" 
                element={<Login users={users}/>}/>
                 <Route 
                path="/savedrecipes" 
                element={<SavedRecipes/>}/>
                  <Route 
                path="/recipes/new" 
                element={<AddRecipe/>}/>
                <Route 
                path="/recipelist" 
                element={<RecipeList recipeList={recipeList}/>}/>
                  <Route 
                path="/signup" 
                element={<Signup users={users} onAddUser={onAddUser}/>}/>
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