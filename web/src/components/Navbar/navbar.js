import React from 'react';
import english_cv from "../../assets/cv-ariel-triana-english.pdf";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "./navbar.css";
import Image from 'react-bootstrap/Image';


const ATPNavbar = () => {
  return (
    <Navbar sticky="top" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#" className="nav-brand">
          <Image 
            className="d-inline-block align-top"
            src="https://avatars.githubusercontent.com/u/61637781?s=400&u=47552b0f52840af9a5d8e1138c28899672fa3389&v=4"
            roundedCircle
            width="40"
            height="40"
            alt="avatar"
          />
          <span className='d-none d-md-inline'>Ariel Triana</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="ml-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-me">About me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link className="download" href={english_cv} download={true}>Download CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ATPNavbar;