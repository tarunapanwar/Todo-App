import { Stack, Text } from '@fluentui/react';
import React from 'react';

export const SliderContent: React.FC<{content: String}> = ({content}) => {
    return(
        <Stack className='slider-content-box'>
            <Text className='slider-content'>
                {content}
            </Text>
        </Stack>
    )
}