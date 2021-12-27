import React from 'react'
import { Container, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../App.css';
import * as yup from 'yup';
import {Formik} from 'formik';

function SignUp() {
  //defining the schema
  const schema = yup.object().shape({
    firstName : yup.string().required("First Name is required"),
    lastName : yup.string().required("Last Name is required"),
    email : yup.string().email("Invalid email address format").required("Email is required"),
    password : yup.string().min(3, "Password must be 3 characters at minimum").required("Password is required"),
    term: yup.bool().required().oneOf([true],"term must be accepted")
  });

    // if (typeof input["password"] !== "undefined" && typeof input["confirm-password"] !== "undefined") {
              
    //   if (input["password"] != input["confirm-password"]) {
    //       isValid = false;
    //       errors["password"] = "Passwords don't match.";
    //   }
    // } 


  return (
    <div className='sign-up d-grid'>
      <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        term:false
      }}
       
      >
        {({

          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors
        }) => (

          <Container id='main-container' className=' mt-5' >
          <h2 className='mb-4 mt-4 ms-4 fs-1'>Sign UP</h2>
          <h5 className='ms-4 fw-normal' >Please fill in this form to create an account</h5>
          <hr  />
          <Form className='text-center' noValidate onSubmit={handleSubmit}>
            <Row className="g-2">
              <Col md>
                <Form.Group controlId="validationFormik01">
                  <FloatingLabel controlId="floatingInputGrid" label="First name" className="mb-3 ms-5 fs-5">
                    <Form.Control type="text" name ="firstName" value={values.firstName} onChange={handleChange} isInvalid={!!errors.firstName}  />
                  </FloatingLabel>
                  <Form.Control.Feedback>{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
                
              </Col>
              <Col md>
                <Form.Group controlId="validationFormik02">
                  <FloatingLabel controlId="floatingInputGrid" label="Last name" className="mb-3 ms-5 fs-5">
                    <Form.Control type="text" name="lastName" value={values.lastName} onChange={handleChange} isInvalid={!!errors.lastName} />
                  </FloatingLabel>
                  <Form.Control.Feedback>{errors.lastName}</Form.Control.Feedback>
                </Form.Group>

              </Col>
            </Row>

            <Form.Group controlId="validationFormik02">
              <FloatingLabel controlId="floatingInput"  label="Email address"  className="mb-3 ms-5 fs-5" >
                <Form.Control type="email" name="email" value={values.email} onChange={handleChange} isInvalid={!!errors.email}  />
              </FloatingLabel>
              <Form.Control.Feedback>{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik02">
              <FloatingLabel controlId="floatingPassword" label="Password" className='ms-5 mb-4 fs-5' >
                <Form.Control type="password" name="password" value={values.password} onChange={handleChange} isInvalid={!!errors.password} />
              </FloatingLabel>
              <Form.Control.Feedback>{errors.password}</Form.Control.Feedback>
            </Form.Group>

            <FloatingLabel controlId="floatingPassword" label="Confirm Password" className='ms-5 mb-4 fs-5' >
              <Form.Control type="password" name="confirm-Password" />
            </FloatingLabel>
            

            <Form.Group className='d-flex mb-4 ms-5 fs-5' controlId='remember-me'>
              <Form.Check  required name="term" onChange={handleChange} isInvalid={!!errors.term} label='I accept the' feedback={errors.terms} feedbackType="invalid" id="validationFormik106"
/><Link className='me-2 ms-2' to = '/'>Terms Of Use </Link> and <Link className='ms-2' to = '/'> Privacy Policy </Link>
              <Button type='submit' className='ms-5 mb-3' id='SignUp' size='lg'>  Sign Up </Button>
            </Form.Group>
          </Form>

          
        </Container>
        )}
      
       
      </Formik>      
    </div>
  );
}
   

export default SignUp
