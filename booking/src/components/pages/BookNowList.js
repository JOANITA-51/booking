import React, { useState} from "react";
import axios from 'axios'
import {Table, Container} from 'react-bootstrap'

const BookNowList = () => {
    const [records, setRecords] = useState([]);
        
    axios.get('http://localhost:3003/submitPreference')
        .then(({data})=> {
            //console.log({data})
            const list = data.map((record) =>{
                const {name, bookingDate, bookingTime, schoolName, schoolLocation, schoolFee} = record
                return {name:name, bookingDate:bookingDate , bookingTime:bookingTime, schoolName:schoolName, schoolLocation:schoolLocation, schoolFee:schoolFee }
            })
            setRecords(list)
        })
        .catch(error =>console.log(error))

  
  return( 
    <div>
        <Container>
            <h3>Booking List</h3>
            <Table striped bordered hover size="sm" stripped='True'style={{marginTop:20}}>
                <thead>
                    <tr>
                        <th> </th>
                        <th>Booking Date</th>
                        <th>Booking Time</th>
                        <th>School Name</th>
                        <th>School Location</th>
                        <th>School Fee</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((record, index)=> 
                            <tr key={index}>
                                <td>{record.name}</td>
                                <td>{record.bookingDate}</td>            
                                <td>{record.bookingTime}</td>
                                <td>{record.schoolName}</td>               
                                <td>{record.schoolLocation}</td>
                                <td>{record.schoolFee }</td>
                            </tr>
                            
                            )
                        }

                            
                </tbody>
                    
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Booking Date</th>
                            <th>Booking Time</th>
                            <th>School Name</th>
                            <th>School Location</th>
                            <th>School Fee</th>
                            
                        </tr>
                    </tfoot>
            </Table>
        </Container>

    </div>
  )

};

export default BookNowList;
