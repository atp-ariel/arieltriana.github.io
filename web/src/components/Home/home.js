import React from 'react';
import "./home.css";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavLink from 'react-bootstrap/esm/NavLink';
import { Github } from 'react-bootstrap-icons';
import english_cv from "../../assets/cv-ariel-triana-english.pdf";

const ATPHome = () => {
  return (
    <div id="home">
        <Container>
            <Row>
                <Col xs={4} md={8} lg={6}></Col>
                <Col xs={8} md={6} lg={6}>
                    <div className="home-content">
                        <h1 className="home-title">Hi 👋🏻, I'm Ariel Triana</h1>
                        <h4 className="home-subtitle">Software Developer</h4>
                        <h4 className="home-subtitle">Data science enthusiast</h4>
                        <div className="d-flex mt-3 align-items-end text-align-end justify-content-end">
                            <NavLink href={english_cv} download={true} id="h-download" className="download">Download CV</NavLink>
                            <NavLink href="https://github.com/atp-ariel" target="_blank"><Github color="#424242" size={40}/></NavLink>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ATPHome;