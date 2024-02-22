import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./home.css";
import HeroBg from "../../assets/images/hero-bg.png";
import { FaFacebook, FaLinkedin, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row>
          {/* Left side */}
          <Col
            md={6}
            className="text-md-left contect-part d-flex flex-column justify-content-center align-items-center"
          >
            <h1>
              <span class="bg-ytext">HELLO! STRA</span>
              <span class="stran">NGER!</span>{" "}
            </h1>
            <p className="typing-text">Mr. Josh Walker</p>
            <p className="hero-subhead" data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine">
              Freelance Web Designer & Developer
            </p>
            <div className="social-icons">
              <FaFacebook className="social-icon fb-color" />
              <FaLinkedin className="social-icon linkedin-color" />
              <FaTwitter className="social-icon twitter-color" />
              <FaGoogle className="social-icon google-color" />
              <FaInstagram className="social-icon insta-color" />
            </div>
          </Col>

          {/* Right side */}
          <Col md={6} className="">
            <Image src={HeroBg} alt="John Weary" fluid className="heroImg" />
          </Col>
        </Row>
      </Container>
      <Row className="mt-20">
        <Col md={2} className="home-box">
          ABOUT ME{" "}
        </Col>
        <Col md={2} className="home-box">
          EDUCATION{" "}
        </Col>
        <Col md={2} className="home-box">
          {" "}
          EXPERIENCE
        </Col>
        <Col md={2} className="home-box">
          PORTFOLIO
        </Col>
        <Col md={2} className="home-box">
          TESTIMONIAL
        </Col>
        <Col md={2} className="home-box">
          {" "}
          CONTACT ME
        </Col>
      </Row>
    </div>
  );
};

export default Home;
