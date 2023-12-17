import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import projects from '../../assets/projects.json';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./projects.css";
import Image from 'react-bootstrap/esm/Image';
import { ArrowRight, Lock } from 'react-bootstrap-icons';

const ATPProjects = () => {
  return (
    <div id="projects" className="color-bg page">
        <Container>
            <Row className="page-title d-block align-items-center justify-content-center text-align-center">
                <span className="page-title-light ">Projects</span>
            </Row>
            <Row>
              {projects.map((item) => <ATPProjectItem name={item.name} description={item.description} link={item.link} public={item.public}/>)}
            </Row>
            
        </Container>
    </div>
  )
}


const ATPProjectItem = (props) => {
  var image_str = "https://avatars.githubusercontent.com/" + props.link.split("/")[3];
  console.log(props);
  return (
    <Col xs={12} md={4}>
      <Card className="project-item">
        <Card.Body>
          <div className="d-flex py-2">
            <Image src={image_str} roundedCircle width="40" height="40" alt="avatar" />
            <Card.Title className="pt-2 mx-3">{props.name}</Card.Title>
          </div>
          <Card.Text>{props.description}</Card.Text>
          <div className="project-item-footer">
            <Button variant="primary" href={props.public ? props.link : ""} disabled={props.public !== true} target="_blank">
              {props.public ? <ArrowRight color="white"/> : <Lock color="var(--color-background)"/>}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default ATPProjects;