import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import { Alert, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Submit=()=>{
    const {id} = useParams();
    const [item, setItem] = useState({});
 
    axios.get(`http://localhost:3003/submitPreference/${id}`)
        .then(({data})=> {
            setItem(data)
            /*console.log(Object.entries(data).filter(person=>person._id===id))
            const list = Object.keys(data).map((key,item) =>{
                const {user, bookingDate, bookingTime, schoolName, schoolLocation, schoolFee} = item
                return {user:user, bookingDate:bookingDate , bookingTime:bookingTime, schoolName:schoolName, schoolLocation:schoolLocation, schoolFee:schoolFee }
            })
            setItems(list)*/
        })
        .catch(error =>console.log(error))
        //console.log(items)
    return (
        <div>
            <Container>
                <Alert variant="success">
                    <Alert.Heading>Form Submitted !!</Alert.Heading>
                    <p>Thank you for booking , Here is what we got from you</p>
    
                </Alert>

                    <ul>
                        <li className="list-group-item">
                            Name : {item.user}
                        </li>
                        <li className="list-group-item">
                            Booking Date : {item.bookingDate}
                        </li>
                        <li className="list-group-item">
                            Booking Time : {item.bookingTime}
                        </li>
                        <li className="list-group-item">
                            School Name : {item.schoolName}
                        </li>
                        <li className="list-group-item">
                            School Location : {item.schoolLocation}
                        </li>
                        <li className="list-group-item">
                            School Fee : {item.schoolFee}
                        </li>
                    </ul>
                    
                
                

                <Link to="/log-in"> <Button variant="success">Confirm Booking</Button> </Link>{' '}
                <Link to="/book-now"> <Button variant="warning">Edit Booking</Button> </Link>{' '}
                <Link to="/log-in"> <Button variant="warning">Set Reminder</Button> </Link>{' '} 
            </Container>
            
        </div>
    )
}

export default Submit
