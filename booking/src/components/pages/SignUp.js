import React from 'react'
import { Container, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../App.css';

function SignUp() {

  return (
    <div className='sign-up d-grid'>
      <Container id='main-container' className=' h-50 mt-5' >
        <h2 className='mb-4 mt-4 ms-4 fs-1'>Sign UP</h2>
        <h5 className='ms-4 fw-normal' >Please fill in this form to create an account</h5>
        <hr  />
        <Form className='text-center' >
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="First name">
                <Form.Control type="email" placeholder="First name" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Last name">
                <Form.Control type="email" placeholder="Last name" />
              </FloatingLabel>
            </Col>
          </Row>
          <Form.Group>
            <Form.Control type='email' size='lg' placeholder='Email address' autoComplete='username'/>
          </Form.Group>
          <Form.Group>
            <Form.Control type='email' size='lg' placeholder='Password' autoComplete='set-password'/>
          </Form.Group>
          <Form.Group>
            <Form.Control type='email' size='lg' placeholder='Confirm Password' autoComplete='confirm-password'/>
          </Form.Group>
          <Form.Group className='d-flex' controlId='remember-me'>
            <Form.Check label='I accept the' /><a href='#'>Terms Of Use </a> and <a href= '#'> Privacy Policy </a>
              <a href='#' className='ms-5'> Forgot password </a>
          </Form.Group>
        </Form>
        <Button id='SignUp'>
          Sign Up
        </Button>
        <Link className="fs-1" to ='/home'>Home</Link>
      </Container>
            
    </div>
  );
}
   

export default SignUp
