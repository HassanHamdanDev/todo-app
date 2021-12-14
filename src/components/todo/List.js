import { Checkbox } from '@blueprintjs/core';
import React from 'react';
import { Card, Button, Modal, CloseButton, Badge } from 'react-bootstrap';
import './list.scss';

export default function ToDoList(props) {

    return (
        <div >
            {props.list.map((item, index) => (
                <Card key={index} className="mt-2 card">
                    <Modal show={props.show} onHide={props.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Are You Sure ?!</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={props.handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={() => props.deleteItem(index)}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Card.Header>
                        <Badge style={{ float: 'left' }} pill bg={item.complete ? "success" : "danger"}>
                            <h5 style={{ fontFamily: 'cursive' }}>{item.complete ? "Complete" : "incomplete"}</h5>
                        </Badge>
                        <CloseButton style={{ float: 'right' }} onClick={props.handleShow} />
                        <h5 style={{ float: 'left', margin: 10 }}>  Assigned to : {item.assignee}  </h5>
                    </Card.Header>
                    <Card.Body className="card">
                        <Card.Title>{item.text}</Card.Title>
                        <Checkbox checked={item.complete} variant="primary" onClick={() => props.toggleComplete(index)}><strong>Complete: {item.complete.toString()}</strong> </Checkbox>
                    </Card.Body>
                    <Card.Footer className="text-muted"><strong>Difficulty: {item.difficulty}</strong></Card.Footer>
                </Card>
            ))}
        </div>
    )
}

