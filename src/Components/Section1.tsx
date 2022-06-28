import { PrimaryButton, Text } from '@fluentui/react';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Colllabbro from './Collab-bro.svg';

export const Section1: React.FC = () => {
    return(
        <Container className='white-section-content'>
            <Row>
                <Col className='sectiononecontent' xs lg="6">
                    <Stack direction="vertical" gap={2} className="leftsidecontent">
                        <Text className='line1'>Service beyond</Text>
                        <Text className='line2'>Conventional Boundaries</Text>
                        <Text className='line3'>Excellence in Accounting, Taxation and Advisory</Text>
                        <PrimaryButton text="Primary" className='section1-button'/>
                    </Stack>
                </Col>
                <Col xs lg="6">
                    <Text className='rightsideimage'><img src={Colllabbro}/></Text>
                </Col>
            </Row>
        </Container>
    )
}