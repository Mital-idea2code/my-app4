// src/components/Skill.js
import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./skill.css"; // Create this file for custom styles
import Navigation from "../Navigation/Navigation";

const Skill = ({ onSectionChange }) => {
  const skillsData = [
    { title: "Figma", image: "images/figma.png" },
    { title: "HTML", image: "images/html.png" },
    { title: "CSS", image: "images/css.png" },
    { title: "JavaScript", image: "images/js.png" },
    { title: "Photoshop", image: "images/photoshop.png" },
    { title: "Illustrator", image: "images/illustrator.png" },
  ];

  return (
    <Container fluid className="skill" data-aos="fade-right">
      <Row>
        {/* Left side content */}
        <Col xs={12} md={11} className="left-content p-5">
          <section className="skill" id="skill">
            <div className="container">
              <div className="skill-container">
                <h1 className="headText mb-40">
                  <span class="bg-ytext">Ski</span>
                  <span class="stran skill-title">ll</span>{" "}
                </h1>
                <Container fluid>
                  <Row className="skills-flex-container">
                    {skillsData.map((skill, index) => (
                      <Col key={index} md={3} sm={6} xs={12} className="box">
                        <div className="image">
                          <img src={skill.image} alt={skill.title} />
                        </div>
                        <div className="title">{skill.title}</div>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </div>
            </div>
          </section>
        </Col>

        {/* Navbar content */}
        <Navigation onSectionChange={onSectionChange} />
      </Row>
    </Container>
  );
};

export default Skill;
