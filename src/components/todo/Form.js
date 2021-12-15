import React from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import './form.scss';

export default function ToDoForm(props) {

    return (

        <Form onSubmit={props.handleSubmit}>
            <fieldset>
                <legend>Add New Item</legend>
                <Container>
                    <Form.Group className="mb-3 " controlId="formGroupEmail">
                        <Form.Label>To Do Item</Form.Label>
                        <Form.Control onChange={props.handleChange} className='form' name="text" type="text" placeholder="Item Details" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Assigned To</Form.Label>
                        <Form.Control onChange={props.handleChange} className='form' name="assignee" type="text" placeholder="Assignee Name" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formGroupPassword">
                        <Form.Label>Difficulty</Form.Label>
                        <Form.Range onChange={props.handleChange} className='form' defaultValue={1} type="range" min={1} max={5} name="difficulty" />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 ">
                        <Col lg={{ span: 10, offset: 2 }}>
                            <Button className='form' style={{ width: 300 }} type="submit">Add Item</Button>
                        </Col>
                    </Form.Group>
                </Container>
            </fieldset>
        </Form>
    )
}
