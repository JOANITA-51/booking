import React, {useState} from 'react';

import axios from "axios"
import {Form, Button, Container, FloatingLabel} from 'react-bootstrap';

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [city, setCity] = useState(" ");
       
    function getWeatherData (city){
    // async function getWeatherData (city){
    //     const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4b35053d60374d68bd8133610212210&q=${city}&days=1&aqi=yes&alerts=yes`)
    //     const data = await response.json();
    //     console.log(data)
        axios({
            method:"GET",
            url:`http://api.weatherapi.com/v1/forecast.json?key=4b35053d60374d68bd8133610212210&q=${city}&days=1&aqi=yes&alerts=yes`
        })
            .then((response)=>{
                // console.log(response.data.current.temp_c);
                // setTemperature(response.data.current.temp_c)
                const {data:{location:{country, region, lon, lat }}} = response
                const {data:{current:{temp_c, temp_f, condition:{text, icon, code}}}} =response
                setWeatherInfo({country,lon,lat,temp_c,temp_f,text,icon,code})
                
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    
    
    const {country, region, temp_c,text, icon} = weatherInfo
    
    return (
        <div>
            <Form.Group className='d-flex mb-3 mt-3'>
            <FloatingLabel controlId="floatingInput" label="Location of the school" className='ms-5 mb-4 fs-5' style={{width:"75%"}} >
                <Form.Control size="lg" type="text" value={city} onChange={(e) => setCity(e.target.value)} name="schoolLocation" />
            </FloatingLabel>
            
                <Button  size='lg'onClick={()=>{
                getWeatherData(city)}}>WEATHER INFO</Button>
            </Form.Group>
            
            <Container className='ms-5 pt-3 pb-3 mb-3 text-center'
                style={
                    {backgroundColor:"#C4C4C4",
                    width:"85%"}
                }   
            >
            <h1>{city} Weather Information</h1> 
                {new Date ().toLocaleString()} <br/>
                {icon && <img src ={icon}/>}
                {region}
                {country}<br/>
                {temp_c} &#8451; - {text}
                
            </Container>
        </div>
    )
}

export default WeatherApp
