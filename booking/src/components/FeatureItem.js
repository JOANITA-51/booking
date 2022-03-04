import React from 'react'
import './Features.css'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'

function FeatureItem(props) {
    return (
        <Container className='features'>
            <Link className="features__item__link" to={props.path}>
                <figure >
                    <img src = {props.src} alt = " " className='features__item__img'/>
                </figure>
                <h3>{props.heading}</h3>
                
                <h5 >{props.text}</h5>
                
            </Link>
        </Container>
           
                

            
       
    )
}

export default FeatureItem
