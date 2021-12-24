import React from 'react'
import {Button} from 'react-bootstrap';
import './Hero.css';
import {Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className="hero-container">
            <h1>The simpler way to make a school appointment</h1>
            <Link to="/sign-up" >
                <Button id="SignUp" variant="outline-light" size="lg">Sign Up For Free</Button>
            </Link>
            <h5>
                Already have an account?
                <Link to='/login'>Login here</Link> 
            </h5>
            
           
            
        </div>
    )
}

export default Hero
