import React from 'react'
import { Container, Form } from 'react-bootstrap';
import '../../App.css';

function SignUp() {

  return (
    <div className='sign-up d-grid'>
      <Container id='main-container' className=' h-50 mt-5' >
                <h2 className='mb-4 mt-4 ms-4 fs-1'>Sign UP</h2>
                <h5 className='ms-4 fw-normal' >Please fill in this form to create an account</h5>
                <hr  />
                <Form className='text-center' >
                    <Form.Group>
                        <Form.Control type='email' size='lg' placeholder='Email address' autoComplete='username'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type='email' size='lg' placeholder='Email address' autoComplete='username'/>
                    </Form.Group>
                </Form>
            </Container>
            
    </div>
  );
}
   

export default SignUp
