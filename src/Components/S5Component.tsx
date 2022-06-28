import { Stack, Text } from '@fluentui/react';
import React from 'react';

export const S5Component: React.FC<{imgpath: string, content: String}> = ({imgpath, content}) => {
    return(
        <Stack>
            <Stack className='imgcontainer'><img src={imgpath}/></Stack>
            <Text className='textcontainer'>{content}</Text>
        </Stack>
    )
}
