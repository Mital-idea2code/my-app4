// src/components/Home.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"; // Create this file for custom styles
import Navigation from "../Navigation/Navigation";
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

const Home = ({ onSectionChange }) => {
  return (
    <Container fluid className="home-container" data-aos="fade-left">
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
          <div className="z-999 mb-5">
            <Button className="btn-color download-btn">Download CV</Button>
          </div>
          {/* New shape with animation */}
          <Image src={shape1} alt="Shape1" fluid className="shape1 shape-animation" />
          <Image src={shape2} alt="Shape2" fluid className="shape2 shape-animation" />
          <Image src={shape3} alt="Shape3" fluid className="shape3 shape-animation" />
          <Image src={shape4} alt="Shape4" fluid className="shape4 shape-animation" />
          <Image src={shape3} alt="Shape3" fluid className="shape3-1 shape-animation" />
          <Image src={shape5} alt="Shape5" fluid className="shape5 shape-animation" />
        </Col>

        {/* Navbar content */}
        <Navigation onSectionChange={onSectionChange} />
        {/* Right side content */}
        <Col xs={12} md={4} className="right-content z-999">
          <Image src={HeroBg} alt="User" fluid className="user-image heroImg" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
