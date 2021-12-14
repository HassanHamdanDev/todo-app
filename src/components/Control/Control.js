import React, { useContext } from 'react';
import { SettingContext } from '../../context/settings/context';
import { Switch } from '@blueprintjs/core';
import { Row, Col, Container } from 'react-bootstrap';
import './control.scss';


export default function Control() {
    const settings = useContext(SettingContext);

    return (
        <Container>
            <Row className="control">
                <Col>
                    <label><strong>Item Count</strong></label>
                    <input
                        type="number"
                        min="1"
                        value={settings.itemsPerPage}
                        max="10"
                        className="w-18 border-blue-800 border-5 rounded-md m-4"
                        onChange={(e) => settings.setItemsPerPage(e.target.value)}
                    />
                </Col>
                <Col>
                    <Switch
                        className="m-4"
                        onChange={() => settings.displayCompleteFun()}
                        checked={settings.displayComplete}
                        labelElement={<strong>Display Complete Tasks</strong>}
                        innerLabelChecked="On"
                        innerLabel="Off"
                    />
                </Col>
            </Row>
        </Container>
    )
}


