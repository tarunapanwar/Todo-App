import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ImageBoxProp } from './ImageBoxProp';
import Puzzel from './Puzzel.png';
import Ribben from './Ribben.png';
import Bulb from './Bulb.png';

export const Section3: React.FC =() => {
    return(
        <Container className='white-section-container'>
            <Row>
                <Col>
                    <ImageBoxProp 
                        path= {Bulb} 
                        heading="heading" 
                        content="Documentation and examples for Bootstrap’s powerful, responsive navigation header, 
                                the navbar. Includes support for branding, navigation, and more, including support for our 
                                collapse plugin."
                    />
                </Col>
                <Col>
                    <ImageBoxProp 
                        path= {Puzzel} 
                        heading="heading" 
                        content="Documentation and examples for Bootstrap’s powerful, responsive navigation header, 
                                the navbar. Includes support for branding, navigation, and more, including support for our 
                                collapse plugin."
                    />
                </Col>
                <Col>
                    <ImageBoxProp 
                        path= {Ribben} 
                        heading="heading" 
                        content="Documentation and examples for Bootstrap’s powerful, responsive navigation header, 
                                the navbar. Includes support for branding, navigation, and more, including support for our 
                                collapse plugin."
                    />
                </Col>
            </Row>
        </Container>
    )
}