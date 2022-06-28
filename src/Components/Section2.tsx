import { Text } from '@fluentui/react';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';

export const Section2: React.FC = () => {
    return(
        <Stack className="blue-section-container">
           <Container className='section2-container'>
                <Row>
                    <Col className='left-container'>
                        <Text className='section2leftheading'>Seven Star <br /> Accounting</Text>
                    </Col>
                    <Col className="right-container">
                        <Text className='section2rightcontent'>
                        Documentation and examples for Bootstrap’s powerful, responsive navigation header, 
                        the navbar. Includes support for branding, navigation, and more, including support 
                        for our collapse plugin.  Documentation and examples for Bootstrap’s powerful, responsive 
                        navigation header, the navbar. Includes support for branding, navigation, and more, 
                        including support for our collapse plugin.
                        </Text>
                    </Col>
                </Row>
            </Container>
        </Stack>
    )
}