import React from 'react'
import FeatureItem from './FeatureItem'
import {Container, Row, Col} from 'react-bootstrap'

function Features() {
    return (
        <div className='features'>
            <h1>Schotrix is a school appointment booking system for everyone to make an online school appointment</h1>
            <Container>
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
                            heading = "Connection"
                            text='Easily connect and relate with the school staff '
                            path = '/sign-up'
                        />  
                    </Col>

                </Row>
                <Row>
                     <Col>
                        <FeatureItem                        
                            src = "/image/back-in-time.ico"
                            heading = "Time-saving"
                            text='Spend less time while booking for a school appointment'
                            path = '/sign-up'
                        /> 
                    </Col>
                    <Col>
                        <FeatureItem                        
                            src = "/image/text-message.ico"
                            heading = "Notification "
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
                            heading = "Integration and API"
                            text='Know the school location and the weather condition for the booked appointment time'
                            path = '/sign-up'
                        />
                    </Col>
                </Row>
          </Container>
           
        </div>
    )
}

export default Features
