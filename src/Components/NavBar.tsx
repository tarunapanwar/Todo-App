import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import sevenstarLogo from './sevenstarLogo.svg';

export const NavBar: React.FC = () => {
    return(
        <Navbar className="background" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="logo"><img src={sevenstarLogo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="#home" className="links">HOME</Nav.Link>
                    <Nav.Link href="#link" className="links">ABOUT</Nav.Link>
                    <Nav.Link href="#link" className="links">SERVICE</Nav.Link>
                    <Nav.Link href="#link" className="links">BLOG</Nav.Link>
                    <Nav.Link href="#link" className="links">CONTACT</Nav.Link>
                </Nav>
                <Nav className="phoneno justify-content-end">02039605080</Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}