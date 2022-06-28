import { PrimaryButton, Text } from '@fluentui/react';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Section4img from "./Section4.svg";

export const Section4: React.FC = () => {
    return(
        <Stack className='blue-section-container'>
            <Container className='section4-content'>
                <Row>
                    <Col>
                        <Stack className='rightsideimage'><img src={Section4img}/></Stack>
                    </Col>
                    <Col>
                        <Stack direction="vertical" gap={2} className="leftsidecontent">
                            <Text className='heading'>Exploring the posibilities in accounting world</Text>
                            <ul className='section4list'>
                                <li>Assimilating Business Demands</li>
                                <li>Creating Ultimate solution</li>
                                <li>Assimilating Business Demands</li>
                                <li>Creating Ultimate solution</li>
                            </ul>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </Stack>
    )
}