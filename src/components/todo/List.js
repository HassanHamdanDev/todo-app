import { Checkbox } from '@blueprintjs/core';
import React from 'react';
import { Card, Button, Modal, CloseButton, Badge } from 'react-bootstrap';

export default function ToDoList(props) {

    return (
        <div>
            {props.list.map((item, index) => (
                <Card key={index} className="mt-3">
                    <CloseButton onClick={props.handleShow} />
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
                        <Badge pill bg={item.complete ? "success" : "danger"}>
                            {item.complete ? "Complete" : "incomplete"}
                        </Badge>
                        <br />
                        Assigned to:{item.assignee}
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{item.text}</Card.Title>
                        <Checkbox variant="primary" onClick={() => props.toggleComplete(index)}> Complete: {item.complete.toString()}</Checkbox>
                    </Card.Body>
                    <Card.Footer className="text-muted">Difficulty: {item.difficulty}</Card.Footer>
                </Card>
            ))}
        </div>
    )
}

