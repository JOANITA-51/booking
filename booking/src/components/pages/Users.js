import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Table, Container} from 'react-bootstrap'
import '../../App.css';

const Users = () => {
    
    const [users, setUsers] = useState([]);
    
    axios.get('https://schotrix.herokuapp.com/')
        .then(({data})=> {
            //console.log({data})
            const details = data.map((user) =>{
                const {email, firstName, lastName} = user
                return {email: email, firstName:firstName , lastName:lastName}
            })
            setUsers(details)
        })
        .catch(error =>console.log(error)) 
 
    //console.log (users)
    /*
    const displayUsersDetails = (users)=>{
        if(!users.length) return null;
    
        return users.map((user, index)=>{
            <div key = {index}>
                <p>{user.firstName}</p>
                <p>{user.email}</p>
            </div>
        })
    }*/

  return (
    <div>
        <Container>
            <h3>Users</h3>
            <Table striped bordered hover size="sm" stripped='True'>
                <thead>
                    <tr>
                        <th>First Name</th>
                            
                        <th>Last Name</th>
                        
                        <th>Email </th>
                        
                    </tr>
                </thead>

            
                <tbody>
                    {
                        users.map((user, index)=> 
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                            
                                <td>{user.lastName}</td>
                                                
                            <td>{user.email}</td>
                            </tr>
                        
                        )
                    }

                        
                </tbody>
                
                <tfoot>
                    <tr>
                        <th>First Name</th>
                            
                        <th>Last Name</th>
                        
                        <th>Email </th>
                        
                    </tr>
                </tfoot>

            
            
            </Table> 
        </Container>
        
       
    </div>
  )
};

export default Users;
