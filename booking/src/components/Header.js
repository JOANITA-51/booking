import React from 'react'
import { Navbar, Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import '../components/style/style.css';


const Header = ({title}) => {
    return (
        <header className='header'>
            <Navbar  variant="dark" expand="lg" className="bg-blue">
                <Container>
                    <Navbar.Brand href="#home">
                    <img alt="" src="../components/images/logo s" width="30" height="30" className="d-inline-block align-top" />
                    {title}.com
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav"className="justify-content-center">
                        <Nav >
                        <NavDropdown title="Details" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Features</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Steps</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse  id="basic-navbar-nav" className="justify-content-end">
                        <Nav >
                        <Nav.Link href="#SignIn"><Button variant="outline-light">Login In</Button></Nav.Link>
                            <Nav.Link href="#SignUp"><Button id="SignUp" variant="outline-light">Sign Up </Button></Nav.Link>
                            <Nav.Link href="#BookNow"><Button variant="outline-light">Book now</Button></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>



                </Container>
            </Navbar>
        </header>
    )
}

export default Header
