import React from 'react';
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../App.css';

function Login() {
    return (
        <div className='log-in d-grid'>
            
            <Container id='main-container' className='mt-5' >
                <h2 className='mb-4 mt-4 ms-5 fs-1'>Log In</h2>
                <h5 className='ms-5 fw-normal' >Please Log in </h5>
                <hr  />
                <Form className='d-grid text-center' >
                <FloatingLabel controlId="floatingInput"  label="Email address"  className="mb-3 ms-5 fs-5" >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className='ms-5 mb-4 fs-5' >
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                    {/* <FloatingLabel className='mb-4' controlId='floatingInput' label="Email address">
                        <Form.Control type='email' size='lg' placeholder='Email address' autoComplete='username' className='position-relative '/>
                    </FloatingLabel> */}
                    {/* <FloatingLabel  className='mb-4' controlId='sign-in-password'>
                        <Form.Control type='password' size='lg' placeholder='Password' autoComplete='current-password' className='position-relative'/>
                    </FloatingLabel> */}

                    <Form.Group className='d-flex mb-4 ms-5 fs-5' controlId='remember-me'>
                        <Form.Check label='Remember me'/>
                        <Link to='/sign-up' className='ms-5'> Forgot password </Link>
                    </Form.Group>

                    <Form.Group className='d-flex mb-3 ms-5'>
                        <Link to='/book-now'><Button type='submit' size='lg' id='LogIn'>  Log In </Button></Link>
                        <Link className='ms-3' to ='/sign-up'>Create an Account</Link>
                    </Form.Group>
                   
                </Form>
                
            </Container>
        
        </div>
        
       
       
    )
}

export default Login
