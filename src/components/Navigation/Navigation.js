import React from "react";
import { Col } from "react-bootstrap";
import { FaUser, FaPen, FaCertificate, FaAddressBook, FaUsers, FaEnvelope, FaHome } from "react-icons/fa";
import "./navigation.css";

const Navigation = ({ onSectionChange, activeSection }) => {
  return (
    <Col
      xs={12}
      md={1}
      className="center-content d-flex flex-column justify-content-center align-items-center p-0 z-999"
    >
      <Col
        className={`home-box  d-flex flex-column justify-content-center align-items-center nav-content home-bg ${
          activeSection === "home" ? "active" : ""
        }`}
        onClick={() => onSectionChange("home")}
      >
        <div class="background-container">
          <FaHome className="icon" />
          <span class="text">HOME</span>
        </div>
      </Col>
      <Col
        className={`home-box d-flex flex-column justify-content-center align-items-center nav-content about-bg ${
          activeSection === "about" ? "active" : ""
        }`}
        onClick={() => onSectionChange("about")}
      >
        <a href="#about">
          <div class="background-container">
            <FaUser className="icon" />
            <span class="text">ABOUT ME</span>
          </div>
        </a>
      </Col>
      <Col className="home-box  d-flex flex-column justify-content-center align-items-center nav-content edu-bg ">
        <div class="background-container">
          <FaPen className="icon" />
          <span class="text">EDUCATION</span>
        </div>
      </Col>
      <Col className="home-box  d-flex flex-column justify-content-center align-items-center nav-content exeperience-bg ">
        <div class="background-container">
          <FaCertificate className="icon" />
          <span class="text">EXPERIENCE</span>
        </div>
      </Col>
      <Col className="home-box  d-flex flex-column justify-content-center align-items-center nav-content portfolio-bg ">
        <div class="background-container">
          <FaAddressBook className="icon" />
          <span class="text">PORTFOLIO</span>
        </div>
      </Col>
      <Col className="home-box  d-flex flex-column justify-content-center align-items-center nav-content testimonial-bg ">
        <div class="background-container">
          <FaUsers className="icon" />
          <span class="text">TESTIMONIAL</span>
        </div>
      </Col>
      <Col className="home-box  d-flex flex-column justify-content-center align-items-center nav-content contact-bg ">
        <div class="background-container">
          <FaEnvelope className="icon" />
          <span class="text">CONTACT ME</span>
        </div>
      </Col>
    </Col>
  );
};

export default Navigation;
