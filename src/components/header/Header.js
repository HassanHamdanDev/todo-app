import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './header.scss';

export default function Header() {
    return (
        <>
            <Navbar className='header' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">To Do List </Navbar.Brand>
                    <Nav className="me-auto" style={{ float: 'right' }}>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="/settings">Settings</Link>
                        <Link className='link' to="/login">Login</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
