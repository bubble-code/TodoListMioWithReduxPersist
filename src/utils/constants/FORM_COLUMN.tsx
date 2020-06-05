import React, { ReactNode } from 'react'

import {Title} from '../../component/Title/Title.component'

export const FORM_COLUMNS:any = [
    {
        title: 'Title',
        dataIndex: 'title',
        key:'title',
        render: (text:ReactNode, record:boolean)=>{
        return <Title record={record}>{text}</Title>
        }
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key:'date',
        render: (text:ReactNode, record:boolean)=>{
        return <Title record={record}>{text}</Title>
        }
    },
    {
        title: 'Action',
        dataIndex: 'complete',
        key:'complete',
        render: (text:ReactNode, record:boolean)=>{
        return <Title record={record}>{text}</Title>
        }
    }
]