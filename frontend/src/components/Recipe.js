import React, { useState} from 'react';
import {Button , Card, Form} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';



export default function Recipe({users, onDeleteRecipe, recipe, addToSaved, addComment }){
    const {id} = recipe

        const handleDelete = () => {
        if (recipe.user_id === 1) {
          
            fetch(`http://localhost:9292/recipes/${id}}`,
            { method: 'DELETE' })
            .then(() => onDeleteRecipe(id))
            // .catch(err => alert(err))
        }
        else {
            alert("You cannot delete a recipe that you didn't post!")
        }
        
    }
    console.log(users)

    const descriptionPopover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">{recipe.name}</Popover.Header>
          <Popover.Body>
                        <Card.Body>Description: {recipe.description}</Card.Body>,
                        <Card.Body>Ingredients: {recipe.ingredients}</Card.Body>,
                        <Card.Body>Instructions: {recipe.instructions}</Card.Body>
          </Popover.Body>
        </Popover>
      );

      
    // const commentsPopover = (
    //     <Popover id="popover-basic">
    //       <Popover.Header as="h3">{recipe.name}</Popover.Header>
    //       <Popover.Body>
    //       {recipe.comments.map(comment => <Card.Body> {comment.user.username} - <Card.Body> {comment.content}</Card.Body> </Card.Body> )}
    //       </Popover.Body>
    //     </Popover>
    //   );

    

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
                    <Card.Img width={200} height={200} src={recipe.image}/>
                      <Card.Body>
                        <OverlayTrigger trigger="click" placement="right" overlay={descriptionPopover}>
                        <Button align="center" width="100px"variant="secondary">View Description</Button>
                        </OverlayTrigger>
                        </Card.Body>
                        {/* <Card.Body>
                        <OverlayTrigger trigger="click" placement="right" overlay={commentsPopover}>
                        <Button align="center" width="100px"variant="secondary">View Comments</Button>
                        </OverlayTrigger>
                        </Card.Body> */}
                        <Card.Body>{viewComments ? 
                                <Button variant="secondary" style={{position: 'center'}} onClick={handleClick}>hide</Button> : 
                                <Button variant="secondary" onClick= {handleClick}> view comments </Button>}
                        </Card.Body>
                                {viewComments ? recipe.comments.map(comment => 
                                <Card.Body> Username: {comment.user.username} 
                                <Card.Body> Comment: {comment.content}</Card.Body>  </Card.Body>  ) : ''} 
                        
                    <Form onSubmit={commentSubmit}>
                        <Form.Control 
                            type= 'text'
                            name="content"
                            placeholder="Add a comment"
                            value={comments.content}
                            onChange={handleChange}/>
                        <Form.Control
                            type='submit'
                            value='Post'/>
                    </Form>
                    <Button onClick={()=> addToSaved(recipe)}style={{margin: '20px'}} variant="dark">Save</Button>
                    <Button onClick={() => handleDelete()} variant="dark" style={{margin: '10px'}}>Delete</Button>
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
                            {viewComments ? <Button variant="secondary"  onClick={handleClick}>hide</Button> : <Button variant="secondary" onClick= {handleClick}> view comments </Button>}
                            {viewComments ? recipe.comments.map(comment => <ul> Username: {comment.user.username} <Card.Body> Comment: {comment.content}</Card.Body> </ul>  ) : ''}
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
                <Button onClick={()=> addToSaved(recipe)}style={{margin: '20px'}} variant="dark">Save</Button>
                <Button onClick={() => handleDelete()} variant="dark" style={{margin: '10px'}}>Delete</Button>
            </Card>
        </div>
    // show all details on click function

    // display either the front or back depending on the current State
return (
    isBack ? back : front
)
}


// {comment.created_at}
{/* <Card.Img style ={{width: '125px'}} src={comment.user.photo}/> */}
// test