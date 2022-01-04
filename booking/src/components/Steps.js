import React from 'react'
import {Row, Col, Card, Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
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
                            <Card.Title>  Fill in the booking details</Card.Title>
    
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>

                <Row>

                    <Col>
                    <Card>
                        <Card.Body>
                            <h5 className='dot'>3</h5>
                            <Card.Title>Confirm booking </Card.Title>

                        </Card.Body>
                    </Card>
                    </Col>

                    
                    <Col>
                    <Card>
                        <Card.Body>
                            <h5 className='dot'>4</h5>
                            <Card.Title>Set a reminder </Card.Title>

                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <div className='text-center' >
                    <Link to="/sign-up" >
                        <Button id="SignUp" variant="outline-light" size="lg">Get Started Booking</Button>
                    </Link>
                </div>

            </Container>
            
        </div>
    )
}

export default Steps
