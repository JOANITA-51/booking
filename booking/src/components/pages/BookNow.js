import React from 'react'
import { Container, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../App.css';

function BookNow() {
    return (
        <div className='book-now d-grid'>
            <Container id='main-container' className='h-100 mt-5' >
                <h2 className='mb-4 mt-4 ms-5 fs-1'>Booking</h2>
                <h5 className='ms-5 fw-normal' >Please fill in this booking information</h5>
                <hr  />
                <Form className='text-center' >
                   
                    <FloatingLabel controlId="floatingInput"  label="Date"  className="mb-3 ms-5 fs-5" >
                        <Form.Control type="date" placeholder="current-date" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Time" className='ms-5 mb-4 fs-5' >
                        <Form.Control type="time" placeholder="current-time" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Name of the School" className='ms-5 mb-4 fs-5' >
                        <Form.Control type="text" placeholder="school" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Location of the School" className='ms-5 mb-4 fs-5' >
                        <Form.Control type="text" placeholder="school" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Weather at the School" className='ms-5 mb-4 fs-5' >
                        <Form.Control type="text" placeholder="weather" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Facilitation Fee" className='ms-5 mb-4 fs-5' >
                        <Form.Control type="text" placeholder="school" />
                    </FloatingLabel>
                </Form>
                <div  >
                    <Button variant="outline-dark" className='ms-5  booking' size = 'lg'>Book Now</Button>
                    <Button variant="outline-dark" className='ms-5  booking' size = 'lg' >Cancel</Button>
                </div>
            </Container> 
            
            
        </div>
            
        
    )
}

export default BookNow
