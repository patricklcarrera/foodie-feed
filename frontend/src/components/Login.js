import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Header from './Header';

export default function Login({ users }){

    //clears form boxes
    const initialFormValues = {
        username: "",
        password: ""
    }

    //state for form
    const [ formData, setFormData ] = useState(initialFormValues)
    const { username, password } = formData

    //changes form data as user types
    const handleFormData = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    //sets up navigate to redirect user upon successful form submission
    const navigate = useNavigate()

    //checks username and password, if correct, directs to homepage
    const handleFormSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target)

        //iterate over all users and see if username is in db
        const foundUsername = users.find(user => user.username === formData.username)

        //iterate over all users and see if password is in db
        const foundPassword = users.find(user => user.password === formData.password)

        //if username and password belong to same user, then redirect
        if(foundUsername !== undefined && foundUsername=== foundPassword) {
            navigate("/recipelist")
        }
        //if username is found but there is no username/password match, send alert
        else if(foundUsername !== undefined) {
            alert("Username or password incorrect.")
            setFormData(initialFormValues)
        }
        //if username is not found, send alert and prompt them to sign up
        else if(foundUsername === undefined) {
            alert("Username or password incorrect. Don't have an account? Sign up today!")
            setFormData(initialFormValues)
        }

    }
    
    return (
        <>
            <Header/>
                <form onSubmit={handleFormSubmit}>
                        <div>  
                            <label>Username:</label>
                            <input 
                                type="text" 
                                onChange={handleFormData}
                                value = {formData.username}
                                name = "username"
                            />
                        </div>
                        <div>  
                            <label>Password:</label>
                            <input
                                type="text" 
                                onChange={handleFormData}
                                value = {formData.password}
                                name = "password"
                            />
                        </div>
                        <button type="submit">Log in</button>
                </form>
                    <NavLink to='/signup'><button>Sign Up</button></NavLink>
        </>
    )
 
    
}