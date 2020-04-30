import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';


class NavBar extends React.Component{
    render() {
       return <Navbar bg="dark" variant="dark" expand="lg" className="navbar-component" >
            <Navbar.Brand href="/">
            <img
                alt=""
                src="/app-logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
                User Registration Application
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/revisited">Last Authentications</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
       }
 }

export default NavBar;
