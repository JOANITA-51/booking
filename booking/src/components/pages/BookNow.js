import React,{useEffect} from 'react'
import { Container, Form, FloatingLabel, Button,Row, Col } from 'react-bootstrap';
import '../../App.css';
import axios from "axios";
import { useState } from 'react';
import {Link} from 'react-router-dom';

const BookNow = ()=> {

    const [data, setData] = useState({})
    //fetch data
    const [resdata , setResdata] = useState({})

    useEffect(()=>{
       
       // history.push(`/submit/${resdata._id}`)

    },[resdata]) 

    const bookSubmit=(event) => {
        event.preventDefault();
        axios.post(
            'https://schotrix.herokuapp.com/addPreference',
            data
        )
        .then(
            (response)=>{
                //console.log(response)
                setResdata(response.data)
                                
            }
        )
        .catch((error)=>{
            console.log(error);
        })

    }
    console.log(data)
    
     const [weatherInfo, setWeatherInfo] = useState({});
     const [city, setCity] = useState(" ");
           
        function getWeatherData (city){

            axios({
                method:"GET",
                url:`http://api.weatherapi.com/v1/forecast.json?key=4b35053d60374d68bd8133610212210&q=${city}&days=1&aqi=yes&alerts=yes`
            })
                .then((response)=>{
                    const {data:{location:{country, lon, lat }}} = response
                    const {data:{current:{temp_c, temp_f, condition:{text, icon, code}}}} =response
                    setWeatherInfo({country,lon,lat,temp_c,temp_f,text,icon,code})
                    
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
        
    const {country, region, temp_c,text, icon} = weatherInfo   
    return (
         <div className='sign-up pt-5 pb-5'>
            <Container >
                <div  className='align-items-center justify-content-center container3 mt-5'> 
                <h2 className='mb-4 mt-4 pt-5 ms-3 fs-1'>Book Now</h2>
                <h5 className='ms-3 fw-normal' >Please fill in this booking information</h5>
                <hr  />
                <Form className='text-center'  onSubmit={bookSubmit}>
                    
                    <Row> 
                        <Col  md={6}>                    
                            <FloatingLabel controlId="floatingInput"  label="FullName"  className="mb-3 ms-3 fs-5" >
                                <Form.Control type="text" name="user" onChange={(event)=>{setData({...data,user:event.target.value})}} />
                            </FloatingLabel>
                        </Col>
                        <Col md={6}>                    
                            <FloatingLabel controlId="floatingInput"  label=" Date"  className="mb-3 ms-3 fs-5" >
                                <Form.Control type="date" name="bookingDate" onChange={(event)=>{setData({...data,bookingDate:event.target.value})}} />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FloatingLabel controlId="floatingInput" label="Time" className='ms-3 mb-4 fs-5' >
                                <Form.Control type="time" name="bookingTime" onChange={(event)=>{setData({...data,bookingTime:event.target.value})}}/>
                            </FloatingLabel>
                        </Col>
                        <Col md={6}>
                            <FloatingLabel controlId="floatingInput" label="School Name" className='ms-3 mb-4 fs-5' >
                                <Form.Control type="text" name="schoolName" onChange={(event)=>{setData({...data,schoolName:event.target.value})}} />
                            </FloatingLabel>
                        </Col>
                    </Row>
      
                    <Row onClick={()=>{
                        getWeatherData(city)}}>
                            <Col md={10}> <FloatingLabel controlId="floatingInput" className='ms-3 mb-4 fs-5' label="School district">
                    <Form.Control size="lg" type="text" value={city} onChange={(e) => {setCity(e.target.value)
                        setData({...data,schoolLocation:e.target.value})
                    
                        }} name="schoolLocation" />
                    </FloatingLabel>      </Col>
                    <Col> <Button className='info' > WEATHER INFO</Button></Col>
                            
                    </Row>
                                           
                    <Row className='ms-4 pt-3 pb-3 mb-3 text-center'
                        style={
                            {
                            borderRadius:'5px'
                            // width:"92%"
                            }
                        } > <Col>
                    <h1>Weather Information</h1> 
                        {new Date ().toLocaleString()} <br/>
                        {icon && <img src ={icon} alt=''/>}
                        {region}
                        {country}<br/>
                        {temp_c} &#8451; - {text}

                       </Col> 
                    </Row>
                    <FloatingLabel controlId="floatingInput" label="Facilitation Fee" className='ms-3 mb-4 fs-5' >
                        <Form.Control type="text" name="schoolFee" onChange={(event)=>{setData({...data,schoolFee:event.target.value})}}/>
                    </FloatingLabel>
                      
                                              
                    
                </Form>

            
                
                <Button type='submit' variant="outline-dark" className='button1 mb-4 ms-3' size = 'lg'>
                            Book Now 
                </Button>
                    {resdata._id &&  <Button variant="outline-dark" className=' ms-5 button1 mb-4' size = 'lg' > <Link to =  {`/submit/${resdata._id}` }state={{data}} >Check Info</Link></Button>} 
                    
             </div>  

            </Container> 
             
        </div>
            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    )
}


export default  BookNow;
