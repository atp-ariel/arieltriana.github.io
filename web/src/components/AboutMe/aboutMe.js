import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const ATPAboutMe = () => {
  var ageDate = new Date() - new Date("1999-11-01");
  ageDate = Math.abs(new Date(ageDate).getFullYear() - 1970);
  return (
    <div id="about-me" className='page'>
        <Container>
            <Row className="page-title d-block align-items-center justify-content-center text-align-center">
                <span>About me</span>
            </Row>
            <Row>
                <Col>
                    <p>I am Ariel Alfonso Triana Pérez, I live in Madrid, Spain and I'm <span id="age">{ageDate}</span> years old. I am a Bachelor of Computer Science at the University of Havana. I love web development and data science. I master programming languages like Python, JS, C#, PHP, CSS, and some frameworks like Jquery, Bootstrap, ASP.NET, FastAPI, React. I have worked with tag languages like HTML and Markdown. Knowledgeable about good programming practices, software architectures and agile code development using methodologies such as Kanban and XP.</p>
                    <p>I have participated in scientific events such as <a href="http://tikhonov.fciencias.unam.mx/emno2020/archivos/ProgramaEMNO2020.pdf" target="_blank" rel="noreferrer">EMNO 2020</a> and the <a href="https://medium.com/juventud-t%C3%A9cnica/premian-trabajos-del-festival-nacional-de-matem%C3%A1tica-y-computaci%C3%B3n-16c3989d93ea" target="_blank" rel="noreferrer">National Festival of Mathematics and Computer Science 2021</a>, with the line of work, Solving Parametric Initial Value Problems using Neural Networks, obtaining a mention in the Applied Mathematics jury in the latter event.</p>
                    <p>I speak Spanish (native) and English. I love music. I play piano, guitar, bass, and a little drums.</p>
                </Col>
                <Col className='d-none d-md-block'>
                    <codersrank-skills-chart username="ArielTriana" labels="true" legend="true" branding='false' tooltip="true"></codersrank-skills-chart>
                </Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default ATPAboutMe;