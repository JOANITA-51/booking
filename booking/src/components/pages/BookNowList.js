import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Record = (props) =>(
    <tr>
        <td>{props.record.name}</td>
        <td>{props.record.date}</td>
        <td>{props.record.time}</td>
        <td>{props.record.schoolName}</td>
        <td>{props.record.location}</td>
        <td>{props.record.fee}</td>
        <td>
            <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link>
            <button className="btn btn-Link" onClick={()=>{props.deleteRecord(props.record._id)}}>Delete</button>
        </td>
    </tr>
)

const BookNowList = () => {
    const [records, setRecords] = useState([]);

    //fetching records from the database.
    useEffect(()=>{
        async function getRecords(){
            const response = await fetch(`http://localhost:3003/submitPreference`)

            if(!response.ok){
                const message = `An error occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setRecords(records);
        }

        getRecords();

        return;
    },[records.length]);

    //method to delete a record
    async function deleteRecord(id){
        await fetch (`http://localhost:3003/${id}`,{
            method:"DELETE"
        });

        const newRecords = records.filter((el)=> el._id !==id);
        setRecords(newRecords);
    }

    //method wiremap out the records on the table
    function bookNowList () {
        return records.map((record)=>{
            return (
                <Record record={record} deleteRecord={()=> deleteRecord(record._id)} key={record._id} />
            )
        })
    } 
    //Display the table with the records of individuals
  return( 
    <div>
        <h3>Booking List</h3>
        <table className="table table-stripped" style={{marginTop:20}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Booking Date</th>
                    <th>Booking Time</th>
                    <th>School Name</th>
                    <th>School Location</th>
                    <th>School Fee</th>
                </tr>
            </thead>
            <tbody>{bookNowList}</tbody>
        </table>
    </div>
  )

};

export default BookNowList;
