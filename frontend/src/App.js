import React from 'react';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import RecipeList from './components/RecipeList';
import SavedRecipes from './components/SavedRecipes';
import Signup from './components/Signup';
import AddRecipe from './components/AddRecipe';
import UserPage from './components/UserPage';
import { Route, Routes } from 'react-router-dom';

function App() {


  //state
  const [recipeList, setRecipeList] = useState([])
  const [searchTerm, setSearch] = useState("")
  const [users, setUsers ] = useState([])
  const [comments, setComments] = useState([])
  const [savedRecipes, setSavedRecipes] = useState([])

  //fetches recipe data from db
  useEffect(()=> {
    fetch("http://localhost:9292/recipes")
    .then(r => r.json())
    .then(data => {
      setRecipeList(data)
    })
  }, [])


  //fetches user data from db
  useEffect(()=> {
      fetch("http://localhost:9292/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data)})
    }, [])
//fetch comments
useEffect(()=> {
  fetch("http://localhost:9292/comments")
  .then(response => response.json())
  .then(data => {
    setComments(data)})
}, [])
  //change value on search bar
  const changeSearch = (value) => {
    setSearch(value)
  }

  // helper function for adding to save
  const addToSaved = (newSavedRecipe) => {
    setSavedRecipes([...savedRecipes,newSavedRecipe])
  }

  //display a list of recipes via search: recipe name
  const filteredRecipes = recipeList.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))

  //Add new user to the user database
  const onAddUser = newUser => {
    const newUserList = [...users, newUser]
    setUsers(newUserList)
  }

  
    const onDeleteRecipe = (id) => {
      const updatedRecipeList = recipeList.filter((recipe) => recipe.id !== id)
      setRecipeList(updatedRecipeList)
    }

  //add a comment to the list of comments for the recipe
    const addComment = (newComment) => {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments)}
    


  //edit user profile
    const onEditUserProfile = modifiedUser => {
      const updateUser = users.map(user => user.id === 1 ? modifiedUser : user)
      setUsers(updateUser)
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
                          users={users}
                          onDeleteRecipe={onDeleteRecipe}
                          comments={comments}
                          setComments={setComments}
                          addComment={addComment}
                          />}/>
              <Route 
                path="/signup" 
                element={<Signup users={users} onAddUser={onAddUser}/>}/>
              <Route
                path='/users/:id/recipes'
                element={<UserPage onEditUserProfile={onEditUserProfile} comments={comments} addToSaved={addToSaved} users={users} recipeList={recipeList} onDeleteRecipe={onDeleteRecipe}/>}/>
            </Routes>
    </div>
  );
}

export default App;



