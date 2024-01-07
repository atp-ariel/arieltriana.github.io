import React, {useRef} from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/esm/Button';
import "./contact.css";
import { Send } from 'react-bootstrap-icons';
import emailjs from "@emailjs/browser";


const ATPContact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        console.log(process.env);
        emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, form.current, process.env.REACT_APP_API_KEY).then((result) => {
            alert(result.text);
        }, (error) => {
            alert(error.text);
        });
    };


  return (
    <div id="contact-me" className='color-bg  page'>
    <Container>
        <Row className="page-title page-d-block align-items-center justify-content-center text-align-center">
            <span className="page-title-light ">Contact me</span>
        </Row>
        <Row>
            <Col className="d-block  justify-content-center" >
                <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="formGroupSubject">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Name" name="from_name"/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="Enter your email" name="from_email"/>
                            <Form.Text className="text-muted">
                                I'll never share your email with anyone else. I just want your email for answer you.
                            </Form.Text>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupBody">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email message"
                            className="mb-3"
                        >
                            <Form.Control as="textarea" rows={5} name="content"/>
                        </FloatingLabel>
                    </Form.Group>
                    <Button type="submit" className="w-100 border-0">
                        Send <Send color="white" className="mx-2"/>
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default ATPContact;