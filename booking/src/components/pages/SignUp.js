import React from 'react'
import { Container, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../App.css';

function SignUp() {

  return (
    <div className='sign-up d-grid'>
      <Container id='main-container' className=' mt-5' >
        <h2 className='mb-4 mt-4 ms-4 fs-1'>Sign UP</h2>
        <h5 className='ms-4 fw-normal' >Please fill in this form to create an account</h5>
        <hr  />
        <Form className='text-center' >
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="First name" className="mb-3 ms-5 fs-5">
                <Form.Control type="email" placeholder="First name" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Last name" className="mb-3 ms-5 fs-5">
                <Form.Control type="email" placeholder="Last name" />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel controlId="floatingInput"  label="Email address"  className="mb-3 ms-5 fs-5" >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" className='ms-5 mb-4 fs-5' >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Confirm Password" className='ms-5 mb-4 fs-5' >
            <Form.Control type="password" placeholder="current-Password" />
          </FloatingLabel>
          <Form.Group className='d-flex mb-4 ms-5 fs-5' controlId='remember-me'>
            <Form.Check label='I accept the' /><Link className='me-2 ms-2' to = '/'>Terms Of Use </Link> and <Link className='ms-2' to = '/'> Privacy Policy </Link>
            <Button className='ms-5 mb-3' id='SignUp' size='lg'>  Sign Up </Button>
          </Form.Group>
        </Form>
        
        
      </Container>
            
    </div>
  );
}
   

export default SignUp
