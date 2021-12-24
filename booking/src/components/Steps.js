import React from 'react'
import {Row, Col, Card, Container} from 'react-bootstrap'
import './Steps.css'

function Steps() {
    return (
        <div className='cards'>
            <h1>How to use Schotrix</h1>
            <Container>
                <Row>
                    <Col>
                    <Card>
                        <Card.Body>
                            <h5 className='dot'>1</h5>
                            <Card.Title> Signup with just a name, email address and password</Card.Title>

                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card>
                        <Card.Body>
                            <h5 className='dot'>2</h5>
                            <Card.Title>  Get started with booking a school appointment</Card.Title>

                            
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Card>
                        <Card.Body>
                            <h5 className='dot'>3</h5>
                            <Card.Title>  Fill in the booking details i.e appropriate time and school</Card.Title>
    
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card>
                        <Card.Body>
                            <h5 className='dot'>4</h5>
                            <Card.Title>Confirm your booking information and set a reminder</Card.Title>

                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Steps
