import React from 'react'
import {Button} from 'react-bootstrap';
import './Hero.css';
import {Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className="hero-container">
            <h1>The simpler way to make a school appointment</h1>
            <Link to="/sign-up" >
                <Button id="BookNow2" variant="outline-light" size="lg">Get Started Booking</Button>
            </Link>
            <h5>
               Schedule and manage your appointments easily
            </h5>
            
           
            
        </div>
    )
}

export default Hero
