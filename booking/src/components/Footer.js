import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './Footer.css';

function Footer() {
    return (
       
            <Row className='footer  text-center py-3'>
                <Col xs={6}>&copy; {new Date().getFullYear()} Copyright </Col>
                <Col>Privacy Policy</Col>
                <Col>Terms of Use</Col>
            </Row>
        
    )
}

export default Footer
