import React from 'react';
import sevenstarLogo from './sevenstarLogo.svg';
import { Carousel, Container } from 'react-bootstrap';
import { Stack, Text } from '@fluentui/react';
import { SliderContent } from './SliderContent';

export const SliderSection: React.FC = () => {
    return(
        <Stack className='white-section-content'>
            <Text className="section5-heading">Setting up your account in the blink of an eye.</Text>
            <Container>
                
                <Carousel>

                    <Carousel.Item interval={1000}>  
                        <SliderContent 
                            content=" Documentation and examples for Bootstrap’s powerful, responsive navigation header, 
                            the navbar. Includes support for branding, navigation, and more, including support 
                            for our collapse plugin. Documentation and examples for Bootstrap’s powerful, responsive 
                            navigation header, the navbar. Includes support for branding, navigation, and more, 
                            including support for our collapse plugin."
                        />
                    </Carousel.Item>

                    <Carousel.Item interval={500}>
                        <SliderContent 
                            content=" Documentation and examples for Bootstrap’s powerful, responsive navigation header, 
                            the navbar. Includes support for branding, navigation, and more, including support 
                            for our collapse plugin. Documentation and examples for Bootstrap’s powerful, responsive 
                            navigation header, the navbar. Includes support for branding, navigation, and more, 
                            including support for our collapse plugin."
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <SliderContent 
                            content=" Documentation and examples for Bootstrap’s powerful, responsive navigation header, 
                            the navbar. Includes support for branding, navigation, and more, including support 
                            for our collapse plugin. Documentation and examples for Bootstrap’s powerful, responsive 
                            navigation header, the navbar. Includes support for branding, navigation, and more, 
                            including support for our collapse plugin."
                        />
                    </Carousel.Item>

                </Carousel>

            </Container>

        </Stack>
    )
}