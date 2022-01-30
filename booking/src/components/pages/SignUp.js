// import React from 'react';
// require('react-dom')
// window.React2 = require('react');
// console.log(window.React1 === window.React2)
// const SignUp = () => {
//   return <div></div>;
// };

// export default SignUp;


import React from 'react'
import { Container, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../App.css';
import {Formik} from 'formik';
import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const SignUp=()=> {
  const history = useHistory();
  const [details, setDetails] = useState({})
 

  const handleSubmit = (event) =>{
    event.preventDefault()

    axios.post('http://localhost:3003/register',details)
      .then(response=>console.log(response.data))
      .catch(error => console.log(error))

      history.push('/submit')
  }



   // if (typeof input["password"] !== "undefined" && typeof input["confirm-password"] !== "undefined") {
              
    //   if (input["password"] != input["confirm-password"]) {
    //       isValid = false;
    //       errors["password"] = "Passwords don't match.";
    //   }
    // } 


  return (
    <div className='sign-up d-grid'>
      <Formik>
   
          <Container id='main-container' className=' mt-5' >
          <h2 className='mb-4 mt-4 ms-4 fs-1'>Sign UP</h2>
          <h5 className='ms-4 fw-normal' >Please fill in this form to create an account</h5>
          <hr  />
          {/* <Form className='text-center' noValidate onSubmit={handleSubmit} method ='post' action='http://localhost:3003/register'> */}
          <Form className='text-center' onSubmit={handleSubmit}>
            <Row className="g-2">
              <Col md>
                <Form.Group >
                  <FloatingLabel controlId="floatingInputGrid" label="First name" className="mb-3 ms-5 fs-5">
                    <Form.Control type="text" name ="firstName"  onChange={ event=> {setDetails({...details,firstName:event.target.value})}} required  />
                  </FloatingLabel>
                 
                </Form.Group>
                
              </Col>
              <Col md>
                <Form.Group >
                  <FloatingLabel controlId="floatingInputGrid" label="Last name" className="mb-3 ms-5 fs-5">
                    <Form.Control type="text" name="lastName"  onChange={ event=> {setDetails({...details,lastName:event.target.value})}} required />
                  </FloatingLabel>
                  
                </Form.Group>

              </Col>
            </Row>

            <Form.Group >
              <FloatingLabel controlId="floatingInput"  label="Email address"  className="mb-3 ms-5 fs-5" >
                <Form.Control type="email" name="email"  onChange={(event) => {setDetails({...details,email:event.target.value})}} required />
              </FloatingLabel>
              
            </Form.Group>

            <Form.Group >
              <FloatingLabel controlId="floatingPassword" label="Password" className='ms-5 mb-4 fs-5' >
                <Form.Control type="password" name="password"  onChange={(event)=> {setDetails({...details,password:event.target.value})}}  required />
              </FloatingLabel>
              
            </Form.Group>

            <FloatingLabel controlId="floatingPassword" label="Confirm Password" className='ms-5 mb-4 fs-5' >
              <Form.Control type="password" name="confirm-Password" />
            </FloatingLabel>
            

            <Form.Group className='d-flex mb-4 ms-5 fs-5' controlId='remember-me'>
              <Form.Check  required name="term"  label='I accept the' /><Link className='me-2 ms-2' to = '/'>Terms Of Use </Link> and <Link className='ms-2' to = '/'> Privacy Policy </Link>
              
            </Form.Group>
            <Button type='submit' className='ms-5 mb-3' id='SignUp' size='lg' >  Sign Up </Button>
          </Form>

          
        </Container>
             
       
      </Formik>      
    </div>
  );
}
   

export default SignUp
