import React, { useState } from 'react';
import Header from './Header'
import Recipe from './Recipe'

export default function UserPage({ recipeList, users, comments, addToSaved, onEditUserProfile }) {

    //after recipeList and users load, filters through to find the recipes made by the first user, then maps over to create a Recipe card for each

    const [ showingForm, setShowingForm ] = useState(false)

    const initialFormValues = {
        photo: "",
        bio: ""
    }

    const [ formData, setFormData ] = useState(initialFormValues)
    const { photo, bio } = formData

    const handleFormData = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleShowForm = () => {
        setShowingForm(true)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setShowingForm(false)

        const requestObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch("http://localhost:9292/users/1", requestObj)
            .then(response => response.json())
            .then(modifiedUser => {
                onEditUserProfile(formData)
                setFormData(initialFormValues)
                setShowingForm(false)
            })
    }

    const form = 
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>Profile Picture:</label>
                <input
                    typ="text"
                    name="photo"
                    value={formData.photo}
                    onChange={handleFormData}
                />
            </div>
            <div>
                <label>Bio:</label>
                <input
                    typ="text"
                    name="bio"
                    value={formData.bio}
                    onChange={handleFormData}
                />
            </div>
            <button type="submit">done editing</button>
        </form>

    return(
        <div>
            <Header />
            {
                users.length > 0 ? 
            <>
                <div>
                    <img src={users[0].photo}/>
                    <p>{users[0].username}</p>
                    <p>{users[0].name}</p>
                    <p>{users[0].bio}</p>
                    {showingForm ? form : <button onClick={handleShowForm}>edit profile</button>}
                    {recipeList.filter(recipe => recipe.user_id === users[0].id).map(recipe => <Recipe key={recipe.id}recipe={recipe} comments={comments} addToSaved={addToSaved}/>)}
                    
                </div>
              
            </>
            : 
            <h1>Loading ...</h1>
            }
        </div>
    )

}