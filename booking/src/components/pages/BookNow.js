import React from 'react'
import { Container, Form, FloatingLabel, Button } from 'react-bootstrap';
import '../../App.css';
import WeatherApp from '../WeatherApp';
import axios from "axios";
import { useState } from 'react';

function BookNow() {
    const [data, setData] = useState({})
    const bookSubmit=(event) => {
        event.preventDefault();
        axios.post(
            'http://localhost:3003/addPreference',
            data
        )
        .then(
            (response)=>{
                console.log(response)
                
            }
        )
        .catch((error)=>{
            console.log('Charles');
        })
    }
    console.log(data)

    return (
        <div className='book-now d-grid'>
            <Container id='main-container' className='h-100 mt-5' >
                <h2 className='mb-4 mt-4 ms-5 fs-1'>Book Now</h2>
                <h5 className='ms-5 fw-normal' >Please fill in this booking information</h5>
                <hr  />
                <Form className='text-center'  onSubmit={bookSubmit}>

                    <FloatingLabel controlId="floatingInput"  label="Full Name"  className="mb-3 ms-5 fs-5" >
                        <Form.Control type="text" name="user" onChange={(event)=>{setData({...data,user:event.target.value})}} />
                    </FloatingLabel>
                   
                    <FloatingLabel controlId="floatingInput"  label=" Date"  className="mb-3 ms-5 fs-5" >
                        <Form.Control type="date" name="bookingDate" onChange={(event)=>{setData({...data,bookingDate:event.target.value})}} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Time" className='ms-5 mb-4 fs-5' >
                        <Form.Control type="time" name="bookingTime" onChange={(event)=>{setData({...data,bookingTime:event.target.value})}}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Name of the School" className='ms-5 mb-4 fs-5' >
                        <Form.Control type="text" name="schoolName" onChange={(event)=>{setData({...data,schoolName:event.target.value})}} />
                    </FloatingLabel>
                    <WeatherApp/>
                    
                    <FloatingLabel controlId="floatingInput" label="Facilitation Fee" className='ms-5 mb-4 fs-5' >
                        <Form.Control type="text" name="schoolFee" onChange={(event)=>{setData({...data,schoolFee:event.target.value})}}/>
                    </FloatingLabel>
                    <div  >
                        <Button type='submit' variant="outline-dark" className='ms-5  booking' size = 'lg'>Book Now</Button>
                        <Button variant="outline-dark" className='ms-5  booking' size = 'lg' >Cancel</Button>
                    </div>
                </Form>
                

            </Container> 
            
            
        </div>
            
        
    )
}

export default BookNow
