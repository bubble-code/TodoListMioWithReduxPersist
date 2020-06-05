import React, { FC, ReactNode } from 'react'
import {Typography} from 'antd'

const {Paragraph} = Typography;
interface Props{
    children: ReactNode;
    record:boolean;
}

export const Title:FC<Props> = props =>{
    return (
        <Paragraph className={ props.record ? 'true':'false'}>
            {props.children}
        </Paragraph>
    );
};