import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './header.scss';

export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">To Do List </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link ><Link className='link' to="/">Home</Link></Nav.Link>
                        <Nav.Link ><Link className='link' to="/settings">Settings</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
