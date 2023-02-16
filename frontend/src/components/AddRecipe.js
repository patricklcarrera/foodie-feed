import {useState} from 'react';
import Header from './Header';
import Form from 'react-bootstrap/Form';


export default function AddRecipe({addRecipe}){
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
    }) }

    return(
        <div>
            <Header/>
        <h1>Add a new recipe</h1>
        <Form  onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control
                    type="text" 
                    name="name"
                    placeholder="name"
                    value={formData.name}
                    onChange={handleChange}/>
              <Form.Control 
                    type="text" 
                    name="description"
                    placeholder='description'
                    value={formData.description}
                    onChange={handleChange}/>
              <Form.Control
                    type="text" 
                    name="ingredients"
                    placeholder='ingredients'
                    value={formData.ingredients}
                    onChange={handleChange}/>
               <Form.Control 
                    type="text" 
                    name="instructions"
                    placeholder='instructions'
                    value={formData.instructions}
                    onChange={handleChange}/>
             <Form.Control
                    type="text" 
                    name="image"
                    placeholder= "Image url"
                    value={formData.image}
                    onChange={handleChange}/>
                <Form.Control
                    type='submit' 
                    value="Create"/>
            </Form.Group>
            </Form>
        </div>
    
    )
    
}