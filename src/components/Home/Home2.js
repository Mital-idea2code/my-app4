// src/components/Home.js
import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home2.css"; // Create this file for custom styles
import HeroBg from "../../assets/images/hero-bg.png";
import shape1 from "../../assets/images/shape/1.svg";
import shape3 from "../../assets/images/shape/3.svg";
import { FaFacebook, FaLinkedin, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row>
        {/* Left side content */}
        <Col xs={12} md={4} className="left-content  d-flex flex-column justify-content-center align-items-center">
          <h1>
            <span class="bg-ytext">HELLO! STRA</span>
            <span class="stran">NGER!</span>{" "}
          </h1>
          <p className="typing-text">Mr. Josh Walker</p>
          <p className="hero-subhead" data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine">
            Freelance Web Designer & Developer
          </p>
          {/* Social icons go here */}
          <div className="social-icons">
            <FaFacebook className="social-icon fb-color" />
            <FaLinkedin className="social-icon linkedin-color" />
            <FaTwitter className="social-icon twitter-color" />
            <FaGoogle className="social-icon google-color" />
            <FaInstagram className="social-icon insta-color" />
          </div>
          {/* New shape with animation */}
          <Image src={shape1} alt="Shape1" fluid className="shape1" />
          <Image src={shape3} alt="Shape3" fluid className="shape3" />
        </Col>

        {/* Center  content */}
        <Col xs={12} md={4} className="center-content"></Col>

        {/* Right side content */}
        <Col xs={12} md={4} className="right-content">
          <Image src={HeroBg} alt="User" fluid className="user-image heroImg" />
        </Col>
      </Row>

      {/* Link boxes at the bottom */}
      {/* <Row className="link-boxes">
        <Col xs={6} md={2}>
          <Button variant="link" className="link-button">
            ABOUT ME
          </Button>
        </Col>
        <Col xs={6} md={2}>
          <Button variant="link" className="link-button">
            EDUCATION
          </Button>
        </Col>
        <Col xs={6} md={2}>
          <Button variant="link" className="link-button">
            EXPERIENCE
          </Button>
        </Col>
        <Col xs={6} md={2}>
          <Button variant="link" className="link-button">
            PORTFOLIO
          </Button>
        </Col>
        <Col xs={6} md={2}>
          <Button variant="link" className="link-button">
            TESTIMONIAL
          </Button>
        </Col>
        <Col xs={6} md={2}>
          <Button variant="link" className="link-button">
            CONTACT ME
          </Button>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Home;
