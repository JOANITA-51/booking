import {Container,Row,Col } from 'react-bootstrap';

const Features = () => {
    return (
        <div>
            {/* <h3>Schotrix is a school appointment booking system for everyone to make a school appointment</h3> */}
            <Container>
                <Row>
                    <Col sm>
                        <h4>Convenience </h4>
                        Procced with online appointment booking without difficulty
                    </Col>
                    <Col sm>
                        <h4>Connection</h4>
                        Easily connect and relate with the school staff
                    </Col>
                    <Col sm>
                        <h4>Time-saving</h4>
                        Spend less time while booking for a school appointment
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Features
