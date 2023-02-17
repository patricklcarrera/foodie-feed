import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
        <div className="loginPage">
            <div className="login">
            <div className="left">
            </div>
            <div className="right">
                <div className="loginForm">
                <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                size="medium"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleFormData}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3"> 
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                size="medium"
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleFormData}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">  
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                size='medium' 
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleFormData}
                                required
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>  
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                size='medium' 
                                type="text"
                                name="password"
                                value={formData.password}
                                onChange={handleFormData}
                                required
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>  
                            <Form.Label>Profile Picture</Form.Label>
                            <Form.Control
                                as="textarea"rows={2} 
                                type="text" 
                                name="photo"
                                value={formData.photo}
                                onChange={handleFormData}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>  
                            <Form.Label>Bio</Form.Label>
                            <Form.Control 
                                type="text"
                                as="textarea" rows={2}
                                name="bio"
                                value={formData.bio}
                                onChange={handleFormData}
                            />
                        </Form.Group>
                        <div className='loginBtn'>
                        <Button
                        variant="outline-dark"
                        size= 'lg'type="submit">Sign Up 🍽️</Button>
                        </div>
             </Form>
             </div>
             </div>
             </div>
            </div>
            </>
     )
}


