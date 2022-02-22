import React from 'react'
import { Alert, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../App.css';
const Success2 = () => {
  return (
    <Container>
        <Alert variant="success">You have Successfully logged in</Alert>
        <Link to="/book-now" id='login'><Button variant="warning" >Book Now</Button></Link> 
        <Link to="/log-in" id='login'><Button  className='ms-5' variant="warning">Log In</Button></Link> 
    
    </Container>
  )
}

export default Success2