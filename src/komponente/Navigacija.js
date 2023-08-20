import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Navigacija = () => {
    return (
        <Container>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">DjSaveta</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Plejlista</Nav.Link>
                            <Nav.Link href="/about">O meni</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Navigacija;