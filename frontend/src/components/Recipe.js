import React, { useState} from 'react';
import {Button , Card} from 'react-bootstrap';



export default function Recipe({onDeleteRecipe, recipe, addToSaved, addComment}){
    const {id} = recipe

        const handleDelete = () => {
        fetch(`http://localhost:9292/recipes/${id}}`,
        { method: 'DELETE' })
        .then(() => onDeleteRecipe(id))
        .catch(err => alert(err))
    }


    const [viewComments, setViewComments] = useState(false)
    const handleClick = () => {
    setViewComments(prev => !prev)
    };

    const [comments, setComments] = useState([])
    const url = "http://localhost:9292/recipes"

    const handleChange = (e) => {
        const {name, value} = e.target
        setComments({...comments, [name]:value})
    }

    const commentSubmit = (e) => {
        e.preventDefault()
    fetch(`${url}/${id}/comments/new`
        , {method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(comments),
        })
        .then(response => response.json())
        .then(() => {
        addComment(comments)
        window.location.reload(false)
    }) }
    //     
        const [isBack, setIsBack] = useState(false);

        //updates the state of isBack
        const handleFlip = () => {
            setIsBack(prev => !prev)
        }
    // only show photo and name
    const front = 
        <div>
            <Card border="dark" style={{ width: '17rem' }}>
                <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Card.Img width={200} height={200} src={recipe.image} onClick={handleFlip}/>
                    <Card.Body>{viewComments ? <Button variant="warning" style={{position: 'center'}} onClick={handleClick}>hide</Button> : <Button variant="warning" onClick= {handleClick}> view comments </Button>}</Card.Body>
                    {viewComments ? recipe.comments.map(comment => <Card.Body> <Card.Img src={comment.user.photo}/> {comment.user.username}  <p> {comment.content}</p> </Card.Body>  ) : ''} 
                    <form onSubmit={commentSubmit}>
                        <input 
                        type= 'text'
                        name="content"
                        placeholder="Add a comment"
                        value={comments.content}
                        onChange={handleChange}/>
                        <input
                            type='submit'
                            value='Post'/>
                    </form>
                    <Button onClick={()=> addToSaved(recipe)}style={{margin: '20px'}} variant="success">Save</Button>
                    <Button onClick={() => handleDelete()} variant="danger" style={{margin: '10px'}}>Delete</Button>
                </Card.Body>
            </Card>
            
        </div>


    const back = 
        <div>
            <Card border="dark" style={{ width: '23rem' }}>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Img  style ={{width: '100px'}}src={recipe.image} onClick={handleFlip}/>
                <Card.Body>Description: {recipe.description}</Card.Body>
                <Card.Body>Ingredients: {recipe.ingredients}</Card.Body>
                <Card.Body>Instruction: {recipe.instructions}</Card.Body>
                {viewComments ? <Button variant="success"  onClick={handleClick}>hide</Button> : <Button variant="success" onClick= {handleClick}> view comments </Button>}
                {viewComments ? recipe.comments.map(comment => <ul> <Card.Img src={comment.user.photo}/> {comment.user.username} <Card.Body> {comment.content}</Card.Body> </ul>  ) : ''}
                <form onSubmit={commentSubmit}>
                    <input 
                    type= 'text'
                    name="write comment"
                    placeholder="Add a comment"
                    value={comments.content}
                    onChange={handleChange}/>
                    <input
                        type='submit'
                        value='Post'/>
                </form>
                <Button onClick={()=> addToSaved(recipe)}style={{margin: '20px'}} variant="success">Save</Button>
                <Button onClick={() => handleDelete()} variant="danger" style={{margin: '10px'}}>Delete</Button>
            </Card>
        </div>
    // show all details on click function

    // display either the front or back depending on the current State
return (
    isBack ? back : front
)
}


// {comment.created_at}