import React, { useState } from 'react';
import Header from './Header'
import Recipe from './Recipe'
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function UserPage({ onDeleteRecipe,recipeList, users, comments, addToSaved, onEditUserProfile }) {

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

    const navigate = useNavigate()

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
                window.location.reload(false)
            })

    }

    const form = 
        <form onSubmit={handleFormSubmit} stylte={{padding: '3%', margin: '3%'}}>
            <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter image url"
                    name="photo"
                    value={formData.photo}
                    onChange={handleFormData}
                    required/>
            </Form.Group>
            </div>
            <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Bio</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleFormData}
                    required/>
            </Form.Group>
            </div>
            <Button variant="primary" type="submit" style={{backgroundColor: 'black', textColor: 'white'}}>done editing</Button>
        </form>

    return(
        <div>
            <Header />
            {
                users.length > 0 ? 
            <>
                <div style={{ margin: '0 auto'}}>
                    <div>
                        <div style={{ padding: '1%', width: '50%', margin: '0 auto', display: 'inline block', textAlign: 'center'}}>
                            <Image src={users[0].photo} thumbnail />
                        </div>
                        <div style={{ padding: '1%', display: 'inline block', margin: '0 auto', width: '50%', textAlign: 'center'}}>
                            <h3 style={{display: 'block', margin: '3%'}}>{users[0].username}</h3>
                            <h4 style={{display: 'block', margin: '3%'}}>{users[0].name}</h4>
                            <h5 style={{display: 'block', margin: '3%'}}>{users[0].bio}</h5>
                            {showingForm ? form : <Button onClick={handleShowForm} style={{backgroundColor: 'black', textColor: 'white'}}>edit profile</Button>}
                        </div>
                    </div>
                    <div class="row row-cols-5 g-3" style={{margin: '5%', textAlign: 'center', width: '100%'}}>
                        {recipeList.filter(recipe => recipe.user_id === users[0].id).map(recipe => <Recipe onDeleteRecipe={onDeleteRecipe} key={recipe.id}recipe={recipe} comments={comments} addToSaved={addToSaved}/>)}
                    </div>
                    
                </div>
            </>
            : 
            <h1>Loading ...</h1>
            }
        </div>
    )

}