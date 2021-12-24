import React from 'react'
import './Features.css'
import {Link} from 'react-router-dom'

function FeatureItem(props) {
    return (
        <div className='features'>
            <Link className="features__item__link" to={props.path}>
                <figure >
                    <img src = {props.src} alt = " " className='features__item__img'/>
                </figure>
                <h3>{props.heading}</h3>
                <div >
                    <h5 >{props.text}</h5>
                </div>
            </Link>
                

            
        </div>
    )
}

export default FeatureItem
