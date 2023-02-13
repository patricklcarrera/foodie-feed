import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

export default function Header(){

return (
    <h1>
        <h1>Foodie Feed</h1>
            <NavLink to="/home"><button >All Recipes</button></NavLink>
            <NavLink to='/addrecipe'><button>Add Recipe</button></NavLink>
            <NavLink to='/savedrecipes'><button>My Saved Recipes</button></NavLink>
            <NavLink to='/login'><button>Log in / Sign up</button></NavLink>
            <button>Dark Mode</button>
    </h1>
)
}