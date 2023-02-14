import React from 'react';
import Header from './Header';

export default function Signup(){
    
    
    return (
        <>
        <Header/>
            <h1> Sign up to Foodie Feed!</h1>
                <form>
                        <div>  
                            <label>Name:</label>
                            <input type="text" />
                        </div>
                        <div>  
                            <label>Username:</label>
                            <input type="text" />
                        </div>
                        <div>  
                            <label>Email:</label>
                            <input type="text" />
                        </div>
                        <div>  
                            <label>Password:</label>
                            <input type="text" />
                        </div>
                        <div>  
                            <label>Profile Picture:</label>
                            <input type="text" />
                        </div>
                        <div>  
                            <label>Bio:</label>
                            <input type="text" />
                        </div>
             </form>
            </>
     )
}


// t.string "name"
// t.string "username"
// t.string "email"
// t.string "password"
// t.string "profile_pic_url"
// t.string "bio"
// end