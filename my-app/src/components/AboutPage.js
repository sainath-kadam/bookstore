import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';

const AboutPage = () => {
  return (
    
    <Container>
      <Row>
        <Col md={4}>
        <br/>
        <br/>
        <br/>
        <br/>
          <Image src="https://i.ibb.co/ZY4tBWK/Whats-App-Image-2023-02-21-at-6.jpg" roundedCircle />
        </Col>
        <Col md={8}>
        <br/>
        <br/>
        <br/>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien augue. Fusce vitae elit ac diam iaculis laoreet. Sed sed dui nisi. Pellentesque rutrum magna auctor justo lacinia, vel blandit lectus aliquam. In hac habitasse platea dictumst.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>My Skills</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien augue. Fusce vitae elit ac diam iaculis laoreet. Sed sed dui nisi. Pellentesque rutrum magna auctor justo lacinia, vel blandit lectus aliquam. In hac habitasse platea dictumst.
              </Card.Text>
              <Button variant="primary">View Skills</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>My Experience</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien augue. Fusce vitae elit ac diam iaculis laoreet. Sed sed dui nisi. Pellentesque rutrum magna auctor justo lacinia, vel blandit lectus aliquam. In hac habitasse platea dictumst.
              </Card.Text>
              <Button variant="primary">View Experience</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
  );
};

export default AboutPage;