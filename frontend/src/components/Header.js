import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap'

export default function Header(){

return (
    <div>
        <Navbar bg="light" expand="lg">
             <Container align='center'>
                    <Navbar.Brand href="/recipes">Foodie Feed</Navbar.Brand>
                    <LinkContainer to="/recipes"><Nav.Link>All recipes</Nav.Link></LinkContainer>
                    <LinkContainer to="/recipes/new"><Nav.Link>My Saved Recipes</Nav.Link></LinkContainer>
                    <LinkContainer to="/savedrecipes"><Nav.Link>My Saved Recipes</Nav.Link></LinkContainer>
                    <LinkContainer to="/users/:id/recipes"><Nav.Link>My Profile</Nav.Link></LinkContainer>
                    {/* <Nav.Link href="/users/:id/recipes">My Profile</Nav.Link> */}
            </Container>
        </Navbar>
    </div>
)
}