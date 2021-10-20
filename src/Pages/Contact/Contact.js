import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container">
            <h3>
                Please fill in the following information-
            </h3>
            <p>This information will help us find the right insurance package for you</p>
            <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="Email" placeholder="Email" required/>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="formGridNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="Number" placeholder="Phone Number" max="11" required/>
                </Form.Group>
                
                <Form.Group as={Col} controlId="formGridNumber">
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control type="date" placeholder="Dath of birth" required/>
                </Form.Group>
            </Row>

            <label for="review" className="p-3">Massage:</label>
            <textarea name="review" rows="4" cols="150">
            </textarea>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end m-3">
                <button class="btn btn-outline-dark me-md-2 submit-btn" type="button">Submit</button>
            </div>
            </Form>
        </div>
    );
};

export default Contact;