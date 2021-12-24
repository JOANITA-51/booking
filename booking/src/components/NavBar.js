import React from 'react'
import { Navbar, Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import './NavBar.css';


const NavBar= ({title}) => {
    return (
        
        <header className='header'>
            <Navbar  variant="dark" expand="lg" className="bg-blue">
                <Container>
                    <Navbar.Brand href="/">
                    <img alt="" src="/image/logo-image.ico" height="35px" className="d-inline-block align-top" />
                    {title}.com
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav"className="justify-content-center">
                        <Nav >
                        <NavDropdown title="Details" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Home</NavDropdown.Item>
                            <NavDropdown.Item href="/features">Features</NavDropdown.Item>
                            <NavDropdown.Item href="/steps">Steps</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse  id="basic-navbar-nav" className="justify-content-end">
                        <Nav >
                        <Nav.Link href="#SignIn"><Button variant="outline-light">Log In</Button></Nav.Link>
                            <Nav.Link href="#SignUp"><Button id="SignUp" variant="outline-light">Sign Up </Button></Nav.Link>
                            <Nav.Link href="#BookNow"><Button variant="outline-light">Book Now</Button></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>



                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar
