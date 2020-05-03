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
                width="35"
                height="35"
                className="d-inline-block align-top"
            />{' '}
                User Registration Application
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/revisited">Last Registrations</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav className="mr-auto">
                <NavDropdown title="Select Language" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/en">English</NavDropdown.Item>
                    <NavDropdown.Item href="/pt-pt">Portuguese</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
       }
 }

export default NavBar;
