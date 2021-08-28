import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About <span className="t4sg-color">Us</span></h3>
              <p className="text-muted">We're a team of driven Harvard students passionate about using technology to make a difference</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">We know social impact work is resource-constrained, and we want to use tech to help you</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Our Mission</h6>
                <p className="text-muted font-weight-light">We leverage Harvard talent to partner with nonprofits, government agencies, and social impact organizations to amplify their impact through technology.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Our Vision</h6>
                <p className="text-muted font-weight-light">We understand that technology and social good are often misaligned, and we focus on need finding and human-centered design to ensure our projects are impactful.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;