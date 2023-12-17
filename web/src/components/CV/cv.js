import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Download } from 'react-bootstrap-icons';
import english_cv from "../../assets/cv-ariel-triana-english.pdf";
import spanish_cv from "../../assets/cv-ariel-triana-spanish.pdf";
import Button from 'react-bootstrap/esm/Button';


const ATPCurriculum = () => {
  return (
    <div id="curriculum" className='page'>
    <Container>
        <Row className="page-title d-block align-items-center justify-content-center text-align-center">
            <span>Curriculum Vitae</span>
        </Row>
        <Row>
            <Col className="d-block d-md-flex justify-content-center" id="buttons">
                <Button href={english_cv} download={true} className="download my-2 mx-md-2 w-100 border-0">
                    <Download color="var(--color-background)" className="mx-2"/>
                    <span className="text-white">ENGLISH VERSION</span>
                </Button>
                <Button href={spanish_cv} download={true} className="download my-2 mx-md-2 w-100 border-0">
                    <Download color="var(--color-background)" className="mx-2"/>
                    <span className="text-white">SPANISH VERSION</span>
                </Button>
            </Col>
        </Row>
        
    </Container>
</div>
  )
}

export default ATPCurriculum;