import React from 'react'
import FeatureItem from './FeatureItem'
import {Container, Row, Col} from 'react-bootstrap'

function Features() {
    return (
   
            <Container className='features'>
            <h1>Schotrix is a school appointment booking system for everyone to make an online school appointment</h1>
                <Row>
                    <Col>
                        <FeatureItem                        
                            src = "/image/booking-_1_.ico"
                            heading = "Conveneience"
                            text='Procced with online appointment booking without difficulty'
                            path = '/sign-up'
                        />
                    </Col>
                    <Col>
                        <FeatureItem                        
                            src = "/image/connection.ico"
                            heading = "Hook up"
                            text='Easily connect and relate with the school staff '
                            path = '/sign-up'
                        />  
                    </Col>

                </Row>
                <Row>
                     <Col>
                        <FeatureItem                        
                            src = "/image/back-in-time.ico"
                            heading = "Timeless"
                            text='Spend less time while booking for a school appointment'
                            path = '/sign-up'
                        /> 
                    </Col>
                    <Col>
                        <FeatureItem                        
                            src = "/image/text-message.ico"
                            heading = "Free Reminder "
                            text='Get a reminder via email and the booking information whenever a school appointment is booked'
                            path = '/sign-up'
                        />
                    </Col>
                </Row>
                <Row>

                    <Col>
                        <FeatureItem                        
                            src = "/image/payment.ico"
                            heading = "Payments"
                            text='Make online payments and deposits through a range of Digital Finance Service Providers like MTN , Airtel, Patasente'
                            path = '/sign-up'
                        />
                    </Col>
                    <Col>
                        
                        <FeatureItem                        
                            src = "/image/api.ico"
                            heading = "Weather"
                            text='Know the weather condition for the booked appointment time'
                            path = '/sign-up'
                        />
                    </Col>
                </Row>
          </Container>
           

    )
}

export default Features
