import { Text } from '@fluentui/react';
import React from 'react';
import { Stack } from 'react-bootstrap';

export const ImageBoxProp: React.FC<{path?: string, heading?: String, content?: String}> = ({path, heading, content}) => {
    return(
        <Stack direction='vertical' gap={3} className='imagepropcontainer'>
            <Stack><img src={path} className='boxpropimage'/></Stack>
            <Text className="heading">{heading}</Text>
            <Text className='content'>{content}</Text>
        </Stack>
    )
}