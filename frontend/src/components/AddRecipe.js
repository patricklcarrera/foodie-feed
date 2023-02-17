import {useState} from 'react';
import Header from './Header';
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddRecipe({addRecipe}){

    const navigate = useNavigate()

    const initialFormData = {
        name: '',
        description: '',
        ingredients: [],
        instructions: '',
        image: ''
    }

    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:9292/recipes/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(() => {
        addRecipe(formData)
        setFormData(initialFormData)
        navigate("/recipes")
    }) }

    return(
        <div>
            <Header/>
        <h1 style={{"padding": "20px", "text-align" : "center"}} className="addNewRecipeText">Add a new recipe🥘</h1>
        <Form onSubmit={handleSubmit} className="addRecipeForm">
            <Form.Group>
                <div style={{"padding": "5px"}}>
                <Form.Control
                    type="text"
                    as="textarea" rows={1}
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}/>
                </div>
                <div style={{"padding": "5px"}}>
                <Form.Control
                    type="text"
                    as="textarea" rows={2}
                    name="description"
                    placeholder='Description'
                    value={formData.description}
                    onChange={handleChange}/>
                </div>
                <div style={{"padding": "5px"}}>
                <Form.Control
                    type="text"
                    as="textarea" rows={3}
                    name="ingredients"
                    placeholder='Ingredients'
                    value={formData.ingredients}
                    onChange={handleChange}/>
                </div>
                <div style={{"padding": "5px"}}>
                <Form.Control
                    type="text"
                    name="instructions"
                    as="textarea" rows={6}
                    placeholder='Instructions'
                    value={formData.instructions}
                    onChange={handleChange}/>
                </div>
                <div style={{"padding": "5px"}}>
                <Form.Control
                    type="text"
                    name="image"
                    placeholder="Image Url"
                    value={formData.image}
                    onChange={handleChange}/>
                </div>
                <div style={{"padding": "5px", "text-align": "center"}}>
                <Button
                    className='addButton'
                    type='submit'
                    variant='outline-warning'>
                        Add
                </Button>
                </div>
            </Form.Group>
        </Form>
        </div>
    
    )
    
}