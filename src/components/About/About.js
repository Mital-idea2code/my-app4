// src/components/About.js
import React from "react";
import { Container, Row, Col, Image, Button, Card, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import Navigation from "../Navigation/Navigation";
import Profile1 from "../../assets/images/02.jpeg";
import { FaBirthdayCake, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import shape1 from "../../assets/images/shape/1.svg";
import shape2 from "../../assets/images/shape/2.svg";
import shape3 from "../../assets/images/shape/3.svg";
import shape4 from "../../assets/images/shape/4.svg";

const About = ({ onSectionChange }) => {
  return (
    <Container fluid className="about" data-aos="fade-right">
      <Row>
        {/* Left side content */}
        <Col xs={12} md={11} className="left-content p-5">
          <section className="about-me mb-50" id="about-me">
            <div className="container">
              <div className="about-me-container">
                <h1 className="headText mb-40">
                  <span class="bg-ytext">About Josh W</span>
                  <span class="stran about-me-title">alker!</span>{" "}
                </h1>
                <div className="about-me-flex-container">
                  <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 20 }}
                    transition={{
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "mirror", // This makes the motion go back and forth smoothly
                      duration: 3,
                    }}
                  >
                    <div className="about-me-image">
                      <div className="back-div"></div>

                      <div className="main-image">
                        <Image src={Profile1} alt="smit" />
                      </div>
                    </div>{" "}
                  </motion.div>
                  <div className="about-me-content ">
                    <h4 className="text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h4>
                    <div className="about-me-text text-center">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                      massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                      quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>

                    <Row className="mt-3">
                      <Col xs={12} md={6} className="details-item">
                        <FaBirthdayCake className="details-icon slateblue-bg" />
                        <span className="details-text">April 22, 1990</span>
                      </Col>
                      <Col xs={12} md={6} className="details-item">
                        <FaEnvelope className="details-icon slateblue-bg" />
                        <span className="details-text">test@gmail.com</span>
                      </Col>
                      <Col xs={12} md={6} className="details-item">
                        <FaPhone className="details-icon slateblue-bg" />
                        <span className="details-text">+123 456 7890</span>
                      </Col>
                      <Col xs={12} md={6} className="details-item">
                        <FaMapMarkerAlt className="details-icon slateblue-bg" />
                        <span className="details-text">20, Bardeshi, Dhaka</span>
                      </Col>
                    </Row>
                    <div className="z-999 mt-4 text-center">
                      <Button className="btn-color download-btn">Download CV</Button>
                    </div>
                  </div>
                </div>

                {/* <div className="mail-button mail-button2">
                  <a href="mailto:test@gmail.com">
                    <Image
                      src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/mail.svg"
                      alt="mail"
                    />
                  </a>
                </div> */}
              </div>
            </div>
          </section>
          {/* New shape with animation */}

          <Image src={shape1} alt="Shape1" fluid className="about_shape1 shape-animation" />
          <Image src={shape1} alt="Shape1" fluid className="about_shape1-1 shape-animation" />
          <Image src={shape2} alt="Shape2" fluid className="about_shape2 shape-animation" />
          {/* <Image src={shape2} alt="Shape2" fluid className="about_shape2-1 shape-animation" /> */}
          <Image src={shape3} alt="Shape3" fluid className="about_shape3 shape-animation" />
          <Image src={shape4} alt="Shape4" fluid className="about_shape4 shape-animation" />

          <Row>
            {/* Happy Clients Card */}
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Year Experience</Card.Title>
                  <Card.Text>
                    <strong>10+</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Happy Clients Card */}
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Happy Clients</Card.Title>
                  <Card.Text>
                    <strong>1500+</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Projects Completed Card */}
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Projects Completed</Card.Title>
                  <Card.Text>
                    <strong>200+</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Reviews Counter Card */}
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Reviews</Card.Title>
                  <Card.Text>
                    <strong>189+</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Navbar content */}
        <Navigation onSectionChange={onSectionChange} />
      </Row>
    </Container>
  );
};

export default About;
