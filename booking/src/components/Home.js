import React from 'react'
import { Navbar, Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import '../components/style/style.css';
const Home = () => {
    return (
        <div className="container">
            <div className="centered">
                <h1>The simpler way to make a school appointment</h1>
                <Nav.Link href="#SignUp2" >
                  <Button id="SignUp2" variant="outline-light" size="lg">Sign Up For Free</Button>
                </Nav.Link>
                < h4 id = "question">Already have an account?<a href='#'>Login here</a> </h4>
            </div>
            
        </div>
    )
}

export default Home
