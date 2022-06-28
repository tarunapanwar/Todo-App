import { Stack, Text } from '@fluentui/react';
import React from 'react';
import { Container } from 'react-bootstrap';
import { S5Component } from './S5Component';
import Section4img from "./Section4.svg";

export const Section5: React.FC = () => {
    return(
        <Stack className='white-section-content'>
            
            <Text className="section5-heading">Be a Part of Next Generation Accounting</Text>

            <Container>

                <Stack horizontal className='boxcontainer'>
                    <S5Component 
                        imgpath={Section4img}
                        content="Extensive Coverage"
                    />

                    <S5Component 
                        imgpath={Section4img}
                        content="Extensive Coverage"
                    />

                    <S5Component 
                        imgpath={Section4img}
                        content="Extensive Coverage"
                    />
                </Stack>

                <Stack horizontal className='boxcontainer'>
                    <S5Component 
                        imgpath={Section4img}
                        content="Extensive Coverage"
                    />

                    <S5Component 
                        imgpath={Section4img}
                        content="Extensive Coverage"
                    />

                    <S5Component 
                        imgpath={Section4img}
                        content="Extensive Coverage"
                    />
                </Stack>

            </Container>

        </Stack>
    )
}