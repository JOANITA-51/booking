import React from 'react'
import { Navbar, Container,Nav,Button } from 'react-bootstrap';
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar= ({title}) => {
    return (
        
        
            <Container >
                <Navbar  variant="dark" expand="lg" className="bg-blue" fixed="top">
                    <Navbar.Brand href="/">
                    <img alt="" src="/image/logo-image.ico" height="35px" className="d-inline-block align-top" />
                    {title}.com
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className = 'me-3'/>

                    <Navbar.Collapse id="responsive-navbar-nav"className="justify-content-center ms-2 ">
                        <Nav >
                            <Nav.Link><Link to = '/'className="home"> Home</Link></Nav.Link>
                            <Nav.Link><Link to = '/features'className="home"> Features</Link></Nav.Link>
                            <Nav.Link><Link to = '/steps'className="home">Steps</Link></Nav.Link>
                            {/*                             
                            <NavDropdown title="Details" id="basic-nav-dropdown">
                                <NavDropdown.Item  className='text-decoration-none' > <Link to = '/'> Home</Link> </NavDropdown.Item>
                                <NavDropdown.Item  className='text-decoration-none' > <Link to = '/features'> Features</Link> </NavDropdown.Item>
                                <NavDropdown.Item  className='text-decoration-none'> <Link to = '/steps'>Steps</Link></NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse  id="basic-navbar-nav" className="justify-content-end ms-2">
                        <Nav >
                        <Nav.Link><Link to="/book-now"><Button id = 'BookNow'variant="outline-light" >Book Now</Button></Link> </Nav.Link>
                        <Nav.Link > <Link to="/log-in"><Button id = 'LogIn2' variant="outline-light" >Log In</Button></Link> </Nav.Link>
                        <Nav.Link ><Link to="/sign-up"><Button id="SignUp" variant="outline-light">Sign Up </Button></Link> </Nav.Link>
                      

                        </Nav>
                    </Navbar.Collapse>



                </Navbar>
            </Container>
       
    )
}

export default NavBar
