// src/components/Home.js
import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"; // Create this file for custom styles
import HeroBg from "../../assets/images/hero-bg.png";
import shape1 from "../../assets/images/shape/1.svg";
import shape2 from "../../assets/images/shape/2.svg";
import shape3 from "../../assets/images/shape/3.svg";
import shape4 from "../../assets/images/shape/4.svg";
import shape5 from "../../assets/images/shape/33.jpg";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaUser,
  FaEdit,
  FaPen,
  FaCertificate,
  FaBook,
  FaAddressBook,
  FaPlusCircle,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row>
        {/* Left side content */}
        <Col xs={12} md={7} className="left-content  d-flex flex-column justify-content-center align-items-center">
          <h1 className="headText">
            <span class="bg-ytext">HELLO! STRA</span>
            <span class="stran">NGER!</span>{" "}
          </h1>
          <p className="typing-text">Mr. Josh Walker</p>
          <p className="hero-subhead" data-aos="zoom-in">
            Freelance Web Designer & Developer
          </p>
          {/* Social icons go here */}
          <div className="social-icons">
            {/* <FaFacebook className="social-icon fb-color" />
            <FaLinkedin className="social-icon linkedin-color" />
            <FaTwitter className="social-icon twitter-color" />
            <FaGoogle className="social-icon google-color" />
            <FaInstagram className="social-icon insta-color" /> */}

            <ul>
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <span className="fb-color"></span>
                  <span className="fb-color"></span>
                  <span className="fb-color"></span>
                  <span className="fb-color"></span>
                  <span className="fb-color">
                    <FaFacebook className="color-white" />
                  </span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <span className="twitter-color"></span>
                  <span className="twitter-color"></span>
                  <span className="twitter-color"></span>
                  <span className="twitter-color"></span>
                  <span className="twitter-color">
                    <FaTwitter className="color-white" />
                  </span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <span className="insta-color"></span>
                  <span className="insta-color"></span>
                  <span className="insta-color"></span>
                  <span className="insta-color"></span>
                  <span className="insta-color">
                    <FaInstagram className="color-white" />
                  </span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  <span className="linkedin-color"></span>
                  <span className="linkedin-color"></span>
                  <span className="linkedin-color"></span>
                  <span className="linkedin-color"></span>
                  <span className="linkedin-color">
                    <FaLinkedin className="color-white" />
                  </span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                  <span className="google-color"></span>
                  <span className="google-color"></span>
                  <span className="google-color"></span>
                  <span className="google-color"></span>
                  <span className="google-color">
                    <FaGoogle className="color-white" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Button className="btn-color download-btn">Download CV</Button>
          </div>
          {/* New shape with animation */}

          <Image src={shape1} alt="Shape1" fluid className="shape1" />
          <Image src={shape2} alt="Shape2" fluid className="shape2" />
          <Image src={shape3} alt="Shape3" fluid className="shape3" />
          <Image src={shape4} alt="Shape4" fluid className="shape4" />
          <Image src={shape3} alt="Shape3" fluid className="shape3-1" />
          <Image src={shape5} alt="Shape5" fluid className="shape5" />
        </Col>

        {/* Center content */}
        <Col xs={12} md={1} className="center-content d-flex flex-column justify-content-center align-items-center p-0">
          <Col className="home-box  d-flex flex-column justify-content-center align-items-center about-bg">
            <div class="background-container">
              <FaUser className="icon" />
              <span class="text">ABOUT ME</span>
            </div>
          </Col>
          <Col className="home-box  d-flex flex-column justify-content-center align-items-center edu-bg ">
            <div class="background-container">
              <FaPen className="icon" />
              <span class="text">EDUCATION</span>
            </div>
          </Col>
          <Col className="home-box  d-flex flex-column justify-content-center align-items-center exeperience-bg ">
            <div class="background-container">
              <FaCertificate className="icon" />
              <span class="text">EXPERIENCE</span>
            </div>
          </Col>
          <Col className="home-box  d-flex flex-column justify-content-center align-items-center portfolio-bg ">
            <div class="background-container">
              <FaAddressBook className="icon" />
              <span class="text">PORTFOLIO</span>
            </div>
          </Col>
          <Col className="home-box  d-flex flex-column justify-content-center align-items-center testimonial-bg ">
            <div class="background-container">
              <FaUsers className="icon" />
              <span class="text">TESTIMONIAL</span>
            </div>
          </Col>
          <Col className="home-box  d-flex flex-column justify-content-center align-items-center contact-bg ">
            <div class="background-container">
              <FaEnvelope className="icon" />
              <span class="text">CONTACT ME</span>
            </div>
          </Col>
        </Col>

        {/* Right side content */}
        <Col xs={12} md={4} className="right-content">
          <Image src={HeroBg} alt="User" fluid className="user-image heroImg" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
