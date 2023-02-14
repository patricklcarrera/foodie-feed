import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Header from './Header';

export default function Login(){

    
    return (
        <>
            <Header/>
                <form>
                        <div>  
                            <label>Username:</label>
                            <input type="text" />
                        </div>
                        <div>  
                            <label>Password:</label>
                            <input type="text" />
                        </div>
                </form>
                    <button>Log in</button>
                    <NavLink to='/signup'><button>Sign Up</button></NavLink>
        </>
    )
 
    
}