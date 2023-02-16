import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';



export default function Recipe({onDeleteRecipe, recipe, addToSaved, users}){
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

    const [comments, setComments] = useState("")
    const url = "http://localhost:9292/recipes"

    
    const commentSubmit = (e) => {
        e.preventDefault()
       
    console.log("need to add comment") }
    //     fetch(`${url}/${id}/comments/new`
    //     , {method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(comments),
    //     })
    //     .then(response => response.json())
    //     .then(() => {
    //     addComment(comments)
    // }) }
        const [isBack, setIsBack] = useState(false);

        //updates the state of isBack
        const handleFlip = () => {
            setIsBack(prev => !prev)
        }
    // only show photo and name
    const front = 
        <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} onClick={handleFlip}/>
            <h1>{viewComments ? <button onClick={handleClick}>hide</button> : <button onClick= {handleClick}> view comments </button>}</h1>
            {viewComments ? recipe.comments.map(comment => <h3> <img src={comment.user.photo}/> {comment.user.username} {comment.created_at} <p> {comment.content}</p> </h3>  ) : ''} 
            <form onSubmit={commentSubmit}>
                <input 
                type= 'text'
                name="write comment"
                placeholder="Add a comment"
                value={comments}
                onChange={(e) => setComments(e.target.value)}/>
                <input
                    type='submit'
                    value='Post'/>
            </form>
            <Button onClick={()=> addToSaved(recipe)}style={{margin: '15px'}} variant="success">Save</Button>
            <Button onClick={() => handleDelete()} variant="danger" style={{margin: '10px'}}>Delete</Button>

         
            
        </div>


    const back = 
        <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} onClick={handleFlip}/>
            <h3>Description: {recipe.description}</h3>
            <h3>Ingredients: {recipe.ingredients}</h3>
            <h3>Instruction: {recipe.instructions}</h3>
            {viewComments ? <button onClick={handleClick}>hide</button> : <button onClick= {handleClick}> view comments </button>}
            {viewComments ? recipe.comments.map(comment => <h3> <img src={comment.user.photo}/> {comment.user.username} {comment.created_at} <p> {comment.content}</p> </h3>  ) : ''}
            <form onSubmit={commentSubmit}>
                <input 
                type= 'text'
                name="write comment"
                placeholder="Add a comment"
                value={comments}
                onChange={(e) => setComments(e.target.value)}/>
                <input
                    type='submit'
                    value='Post'/>
            </form>
            <button onClick={()=> addToSaved(recipe)}>Save</button>
            <button onClick={() => handleDelete()}>Delete</button>
        </div>
    // show all details on click function

    // display either the front or back depending on the current State
return (
    isBack ? back : front
)
}
