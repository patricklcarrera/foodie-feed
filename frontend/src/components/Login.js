import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Header from './Header';
//import icon from './icon.png'
import foodieFeed from './foodieFeed.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
            navigate("/recipes")
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
        
        <div className="loginPage">
            <div className="login">
            <div className="left">
            </div>
            <div className="right">
                <div className="loginForm">
                <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">  
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        size="medium"
                        type="text" 
                        onChange={handleFormData}
                        value = {formData.username}
                        name = "username"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                        type="password" 
                        onChange={handleFormData}
                        value = {formData.password}
                        name = "password"
                    />
                </Form.Group >
                <div className="loginBtn">
                    <Button 
                    variant="outline-dark"
                    size= 'lg'
                    type="submit">Log In</Button>
                </div>
                <div className='loginBtn'>
                    <NavLink to='/signup'><Button
                    variant="outline-dark"
                    size= 'lg'
                    >Sign Up</Button></NavLink>
                </div>
                </Form>
                </div>
            </div>
            </div>
        </div>
    )
    
}