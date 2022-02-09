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
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'


const SignUp=()=> {
  const history = useHistory();
  const [details, setDetails] = useState({})
 

  // const Submission = (event) =>{
  //   event.preventDefault()

  //   axios.post('http://localhost:3003/register',details)
  //     .then(response=>console.log(response.data))
  //     .catch(error => console.log(error))

  //     history.push('/submit')
  // }

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(4,'Password length should be atleast 4 characters'),
    passwordConfirm: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')],'Passwords must and should match'),
  })

  const validationOpt = {resolver: yupResolver(formSchema)}
  const {register,handleSubmit,formState}=useForm(validationOpt)
  const {errors} = formState

  function onFormSubmit(data, event){
    console.log(JSON.stringify(data, null, 4))
    event.preventDefault()

    axios.post('http://localhost:3003/register',details)
      .then(response=>console.log(response.data))
      .catch(error => console.log(error))

      history.push('/book-now')
    
  }

  return (
    <div className='sign-up d-grid'>
      <Formik>
   
          <Container id='main-container' className=' mt-5' >
          <h2 className='mb-4 mt-4 ms-4 fs-1'>Sign UP</h2>
          <h5 className='ms-4 fw-normal' >Please fill in this form to create an account</h5>
          <hr  />
          {/* <Form className='text-center' noValidate onSubmit={handleSubmit} method ='post' action='http://localhost:3003/register'> */}
          <Form className='text-center' onSubmit={handleSubmit(onFormSubmit)}>
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
                <Form.Control type="password" name="password" {...register('password')} onChange={(event)=> {setDetails({...details,password:event.target.value})}}  required
                className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.password?.message}</div>
          
              </FloatingLabel>
              
            </Form.Group>

            <FloatingLabel controlId="floatingPassword" label="Confirm Password (The passwords should match)" className='ms-5 mb-4 fs-5' >
              <Form.Control type="password" name=" passwordConfirm" {...register('passwordConfirm')}   className={`form-control ${ errors.passwordConfirm ? 'is-invalid' : ''}`}/>
            </FloatingLabel>
            <div className="invalid-feedback"> {errors.passwordConfirm?.message}</div>
            

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
