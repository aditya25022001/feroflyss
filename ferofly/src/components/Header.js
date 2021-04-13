import React from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import '../App.css'

export const Header = () => {
    return (
        <Navbar fixed='top' collapseOnSelect expand='lg' className='py-3' variant="dark" style={{ backgroundColor:'black', color:'white' }}>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className='font-weight-light' id='navlinks' href="#features">HOME</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link className='font-weight-light' id='navlinks' href="#pricing">ABOUT</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link className='font-weight-light' id='navlinks' href="#features">ROOMS</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link className='font-weight-light' id='navlinks' href="#pricing">SERVICES</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link className='font-weight-light' id='navlinks' href="#features">GALLERY</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link className='font-weight-light' id='navlinks' href="#pricing">SEE & DO</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link className='font-weight-light' id='navlinks' href="#features">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="ml-auto">
                    <Button id='button_navbar'>Book a Room</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

