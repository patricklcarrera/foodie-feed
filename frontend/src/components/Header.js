import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

export default function Header(){

return (
    <h1>
        <h1>Foodie Feed</h1>
            <NavLink to="/recipes"><button >All Recipes</button></NavLink>
            <NavLink to='/recipes/new'><button>Add Recipe</button></NavLink>
            <NavLink to='/savedrecipes'><button>My Saved Recipes</button></NavLink>
            <NavLink to='/'><button>Log in / Sign up</button></NavLink>
            <button>Dark Mode</button>
    </h1>
)
}