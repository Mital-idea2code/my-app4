import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./home.css";
import HeroBg from "../../assets/images/hero-bg.png";

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
          </Col>

          {/* Right side */}
          <Col md={6} className="">
            <Image src={HeroBg} alt="John Weary" fluid className="heroImg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
