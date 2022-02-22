import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import { Container, Form, FloatingLabel, Button } from 'react-bootstrap';
import axios from 'axios';

const EditBookNow = () => {
    const [data, setData] = useState({
        name:"",
        date:"",
        time:"",
        schoolName:"",
        location:"",
        fee:"",
        records:[],

    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchData(){
            const id = params.id.toString();
            const response = await fetch (`https://schotrix.herokuapp.com/submitPreference/${params.id.toString()}`)

            if(!response.ok){
                const message = `An error has occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const record = await response.json();
            if(!record){
                window.alert(`Record with id ${id} not found`);
                navigate("/")
                return;
            }

            setData(record)
        }
        fetchData();

        return;

    },[params.id, navigate]);


    //Updating the state properties.
    function updateData(value){
        return setData((prev)=>{
            return {...prev, ...value};
        });
    }

    async function onSubmit(e){
        e.preventDefault();
        const editedPreference = {
            name:data.name,
            date:data.date,
            time:data.time,
            location:data.location,
            fee:data.fee,
            
        };

        //Sending a post request to update the data in the database.
        await fetch (`https://schotrix.herokuapp.com/updatePreference/${params.id}`,{
            method: "POST",
            body: JSON.stringify(editedPreference),
            headers: {
                'content-Type':'application/json'
            },
        });
        navigate("/");
    }
    
     const [weatherInfo, setWeatherInfo] = useState({});
     const [city, setCity] = useState(" ");
           
        function getWeatherData (city){

            axios({
                method:"GET",
                url:`http://api.weatherapi.com/v1/forecast.json?key=4b35053d60374d68bd8133610212210&q=${city}&days=1&aqi=yes&alerts=yes`
            })
                .then((response)=>{
                    const {data:{location:{country,lon, lat }}} = response
                    const {data:{current:{temp_c, temp_f, condition:{text, icon, code}}}} =response
                    setWeatherInfo({country,lon,lat,temp_c,temp_f,text,icon,code})
                    
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
        
    const {country, region, temp_c,text, icon} = weatherInfo  

    // display the form that takes input from the user to update
  return (
    <div>
        <Form className='text-center'  onSubmit={onSubmit}>

            <FloatingLabel controlId="floatingInput"  label="Full Name"  className="mb-3 ms-5 fs-5" >
                <Form.Control type="text" name="name" value={data.name} onChange={(event)=>updateData({name:event.target.value})} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput"  label=" Date"  className="mb-3 ms-5 fs-5" >
                <Form.Control type="date" name="date" value={data.date}  onChange={(event)=>updateData({date:event.target.value})} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Time" className='ms-5 mb-4 fs-5' >
                <Form.Control type="time" name="time" value={data.time}  onChange={(event)=>updateData({time:event.target.value})}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Name of the School" className='ms-5 mb-4 fs-5' >
                <Form.Control type="text" name="schoolName" value={data.schoolName} onChange={(event)=>updateData({schoolName:event.target.value})} />
            </FloatingLabel>
            <Form.Group className='d-flex mb-3 mt-3'>
            <FloatingLabel controlId="floatingInput" label="Location of the school" className='ms-5 mb-4 fs-5' style={{width:"75%"}} >
            <Form.Control size="lg" type="text" value={city} onChange={(e) => {setCity(e.target.value)
                updateData({location:e.target.value})

                }} name="location" />
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
                {icon && <img src ={icon} alt=''/>}
                {region}
                {country}<br/>
                {temp_c} &#8451; - {text}
                
            </Container>
            <FloatingLabel controlId="floatingInput" label="Facilitation Fee" className='ms-5 mb-4 fs-5' >
                <Form.Control type="text" name="schoolFee" onChange={(event)=>{setData({...data,schoolFee:event.target.value})}}/>
            </FloatingLabel>
            <div  >
                <Button type='submit' variant="outline-dark" className='ms-5  booking' size = 'lg' value='Update Record' >Update Record </Button>
                
            </div>
        </Form>
    </div>
  )

};

export default EditBookNow;
