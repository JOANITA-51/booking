import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../App.css';

function Login() {
    return (
        <div className='log-in d-grid'>
            
            <Container id='main-container' className='mt-5' >
                <h2 className='mb-4 mt-4 ms-4 fs-1'>Log In</h2>
                <h5 className='ms-4 fw-normal' >Please Log in </h5>
                <hr  />
                <Form className='d-grid text-center' >
                    <Form.Group className='mb-4' controlId='sign-in-email'>
                        <Form.Control type='email' size='lg' placeholder='Email address' autoComplete='username' className='position-relative '/>
                    </Form.Group>
                    <Form.Group  className='mb-4' controlId='sign-in-password'>
                        <Form.Control type='password' size='lg' placeholder='Password' autoComplete='current-password' className='position-relative'/>
                    </Form.Group>
                    <Form.Group className='d-flex' controlId='remember-me'>
                        <Form.Check label='Remember me'/>
                        <p className='ms-5'> Forgot password </p>
                    </Form.Group>
                    <Button>
                        Log In
                    </Button>
                </Form>
                <Link to ='/sign-up'>Create an Account</Link>
            </Container>
        
        </div>
        
       
       
    )
}

export default Login
