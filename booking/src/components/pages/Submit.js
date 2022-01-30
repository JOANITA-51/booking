import React, {useEffect, useState} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap'
import BookNow from './BookNow';

const Submit=()=>{
    const {id} = useParams();
    const [items, setItems] = useState({});
    const location = useLocation()
    useEffect ( () => {
        fetchItems();
    }, [] );
    console.log(`The location is ${JSON.stringify(location.state)}`)

    console.log(id)
    const fetchItems = async () =>{

        const response = await fetch(`http://localhost:3003/submitPreference/`);
        const items = response.data;
        setItems(items)
    }
    console.log(items)
    return (
        <div>
            {/* <h1>{items.schoolLocation}</h1> */}
            <h2>Thanks for submitting</h2>
            {/* <BookNow/> */}
            
            
{/*                 
                    {items.user.firstName}
                    {items.user.lastName}
                    {items.user.email}
                    {items.preference.bookingDate}
                    {items.preference.bookingTime}
                    {items.preference.schoolName}
                    {items.preference.schoolLocation}
                    {items.preference.schoolFee} */}

                              
            

            
            {/* <Alert variant="success">
                <Alert.Heading>Form Submitted !!</Alert.Heading>
                <p>Thank you for booking , Here is what we got from you</p>
  
            </Alert>
            <ul className="list-group">
                <li className="list-group-item">
                    First Name: {values.firstName}
                </li>
                <li className="list-group-item">
                    Last Name: {values.lastName}
                </li>
                <li className="list-group-item">
                    Email: {values.email}
                </li>
                <li className="list-group-item">
                    Preferred Date: {values.date}
                </li>
                <li className="list-group-item">
                    Preferred Time: {values.time}
                </li>
                <li className="list-group-item">
                    School: {values.time}
                </li>
            </ul>

            <Link to="/log-in"> <Button variant="success">Confirm Booking</Button> </Link>{' '}
            <Link to="/log-in"> <Button variant="warning">Edit Booking</Button> </Link>{' '}
            <Link to="/log-in"> <Button variant="warning">Set Reminder</Button> </Link>{' '} */}
        </div>
    )
}

export default Submit
