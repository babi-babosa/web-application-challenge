import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import { useTranslation } from 'react-i18next';

function NavBar() {
    const { t, i18n } = useTranslation('common');
    return <Navbar bg="dark" variant="dark" expand="lg" className="navbar-component" >
        <Navbar.Brand href="/">
        <img
            alt=""
            src="/app-logo.png"
            width="35"
            height="35"
            className="d-inline-block align-top"
        />{' '}
            { t('welcome.title') }
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/revisited"> { t('links.revisited') }</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Nav className="mr-auto">
            <NavDropdown title={t('links.language')} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>English</NavDropdown.Item>
                <NavDropdown.Item onClick={() => i18n.changeLanguage('pt')}>Portuguese</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    </Navbar>
}

export default NavBar;