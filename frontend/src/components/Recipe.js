import React, {useState} from 'react';


export default function Recipe({recipe, addToSaved, users}){
    const [viewComments, setViewComments] = useState(false)
    const handleClick = () => {
    // comments = recipe.comments.map(comment => comment.content)
    setViewComments(prev => !prev)
    };
    const recipeComments = recipe.comments.map(comment => comment.content)
    console.log(recipeComments)
    // const eachComment = recipeComments.map(content => content.replace('<br/', '/n'))
    const commentsUser = users.map(user => user.username)
    return (
        <div>
            <h1>{recipe.name}</h1>
            <h2>{recipe.description}</h2>
            <h2>{recipe.ingredients}</h2>
            <h2>{recipe.instructions}</h2>
            <img src={recipe.image}/>
            {viewComments ? <button onClick={handleClick}>hide</button> : <button onClick= {handleClick}> view comments </button>}
            {viewComments ?  <p> {recipeComments} </p>: ''}
            <button onClick={()=> addToSaved(recipe)}>Save</button>
        </div>
    )
    
}