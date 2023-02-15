import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';

export default function Signup({ users, onAddUser }){
    
    //clears form boxes
    const initialFormValues = {
        name: "",
        username: "",
        email: "",
        password: "",
        photo: "",
        bio: ""
    }

    //state for form
    const [ formData, setFormData ] = useState(initialFormValues)
    const { name, username, email, password, photo, bio } = formData
    
    //changes form data as user types
    const handleFormData = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    //if post successful, redirects to homepage
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault()

        //array of current usernames
        const usernameArray = users.map (user => user.username)

        //checks db to make sure new username is not a duplicate
        if(usernameArray.includes(formData.username)) {
            alert("That username is already taken! Please pick another one.")
            setFormData(initialFormValues)
        }
        //adds new user to db and redirects them to homepage
        else {
            const requestObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }

            fetch("http://localhost:9292/users", requestObj)
                .then(response => response.json())
                .then(newUser => {
                    onAddUser(formData)
                    setFormData(initialFormValues)
                    navigate("/recipes")
                })
                .catch(() => {
                    alert("Something went wrong!")
                })
        }
    }
    
    return (
        <>
        <Header/>
            <h1> Sign up to Foodie Feed!</h1>
                <form onSubmit={handleFormSubmit}>
                        <div>  
                            <label>Name:</label>
                            <input 
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleFormData}
                                required
                            />
                        </div>
                        <div>  
                            <label>Username:</label>
                            <input 
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleFormData}
                                required
                            />
                        </div>
                        <div>  
                            <label>Email:</label>
                            <input 
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleFormData}
                                required
                            />
                        </div>
                        <div>  
                            <label>Password:</label>
                            <input 
                                type="text"
                                name="password"
                                value={formData.password}
                                onChange={handleFormData}
                                required
                            />
                        </div>
                        <div>  
                            <label>Profile Picture:</label>
                            <input 
                                type="text" 
                                name="photo"
                                value={formData.photo}
                                onChange={handleFormData}
                            />
                        </div>
                        <div>  
                            <label>Bio:</label>
                            <input 
                                type="text"
                                name="bio"
                                value={formData.bio}
                                onChange={handleFormData}
                            />
                        </div>
                        <button type="submit">Sign up!</button>
             </form>
            </>
     )
}


