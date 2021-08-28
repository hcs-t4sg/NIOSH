import React from 'react';
import Image from 'next/image'
import { Container, Row, Col } from "reactstrap";
const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5}>
            <Image src={feature.img} alt="Picture of the author" width="160px" height="200%"/>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 t4sg-color">Read More <span className="right-icon ml-2">&#8594;</span></a>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
            <p className="text-muted mb-3 f-15">{feature.desc}</p>
            <a href={feature.link} className="f-16 t4sg-color">Read More <span className="right-icon ml-2">&#8594;</span></a>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
            <Image src={feature.img} alt="Picture of the author" width="160px" height="200%"/>
        </Col>
      </Row>
      )
    }
    </>
  );
}
const Feature = () => {
const features = [
    {id : 1, img : "/../public/default-t4sg.jpeg", title : "Human-centered design", desc : "We use human-centered design principles to better understand our end user and make sure that we address their needs not just claim to.", link : "/"},
    {id : 2, img : "/../public/default-t4sg.jpeg", title : "Semester-long engagements", desc : "We commit a team of passionate students, including a Project Manager, a UX Designer, and 3-5 Software Engineers for 12 week long engagements.", link : "/"},
    {id : 3, img : "/../public/default-t4sg.jpeg", title : "Impact-driven", desc : "We recruit members not just for their technical capacity and problem-solving ability, but for their passion for impact and drive to make a positive difference.", link : "/"},
  ];
return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="t4sg-color">Features</span></h3>
              <p className="text-muted">
              We're Harvard students passionate about leveraging computer science to make a difference, and we work with social impact organizations to understand their needs and develop products that effectively tackle their challenges. We understand that technology and social good are often misaligned, and we focus on need finding and human-centered design to ensure our projects are impactful.
              </p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}
export default Feature;