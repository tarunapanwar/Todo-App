import { Stack, Text } from '@fluentui/react';
import React from 'react';
import { Container } from 'react-bootstrap';
import sevenstarLogo from './sevenstarLogo.svg';

export const Footer: React.FC = () => {
    return(  
        <Stack horizontal className='blue-section-container'>
            <Container className='footer-stacks'>
                <Stack>
                    <img src={sevenstarLogo} className='footerlogoimage'/>
                </Stack>

                <Stack>
                    <Text className='footerlinkheading'>COMPANY</Text>
                    <ul className='footermenulist'>
                        <li>home</li>
                        <li>about</li>
                        <li>service</li>
                        <li>blog</li>
                        <li>contact</li>
                    </ul>
                </Stack>

                <Stack>
                    <Text className='footerlinkheading'>ACCOUNTING</Text>
                    <ul className='footermenulist'>
                        <li>limited company</li>
                        <li>sole trader</li>
                        <li>article</li>
                    </ul>
                </Stack>

                <Stack>
                    <Text className='footerlinkheading'>LOCATION</Text>
                    <ul className='footermenulist'>
                        <li>Address</li>
                        <li>email</li>
                    </ul>
                </Stack>

                <Stack>
                    <ul>
                        <li>facebook</li>
                        <li>instagram</li>
                        <li>twitter</li>
                        <li>linkedin</li>
                    </ul>
                </Stack>

            </Container>
        </Stack>
    )
}