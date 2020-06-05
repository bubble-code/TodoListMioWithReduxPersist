import React, { useState, FC } from 'react'
import { Button, Form, Row, Typography } from 'antd'


import { openNotification } from '../../utils/function/openNotification'
import { FormInput } from './FormInput.Component';
import { Calendar } from './Calendar.Component';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Datas } from '../../utils/Interfaces/Interface.d';
import {v4 as uuidv4} from 'uuid'



const { Title } = Typography;

export enum EReduxActionTypes{
    TOGGLE_MESSAGE = "TOGGLE_MESSAGE"
}
export interface IReduxBaseAction{
    type:EReduxActionTypes;
}
export interface IReduxToggleMessageAction extends IReduxBaseAction{
    type:EReduxActionTypes.TOGGLE_MESSAGE
}
export function toggleMessage():IReduxToggleMessageAction{
    return{ type : EReduxActionTypes.TOGGLE_MESSAGE}
}
const mapDispatchToProps = (dispatc:Dispatch)=>({
    addTodo(todo: Datas){
        dispatc({
            type:"Agregar",
            dat: todo
        })
    }
})

const mapStateToProps = (state:Datas[])=>({
    data: state
});

type MM =ReturnType<typeof mapDispatchToProps>

const TodoForm:FC<MM> = ({addTodo}) => {
    // const [form, setForm] = useState<string>('');
    const [form, setForm] = useState('');
    const [date, setDate] = useState<string>();
    const hasDate = date ? true : false;

    const handleDate = (date: string) => {
        setDate(date);
    }
    const handleForm = (dato: string) => {
        setForm(dato);
    }
    const formSubmit = () => {
        if (form && date && form.length >= 5) {
            addTodo({title:form,date:date,key:uuidv4(),complete:false})
            openNotification('bottomLeft', 'Adicionado');
        } else {
            openNotification('bottomLeft', 'Problema');
        }
    }

    return (
        <>
            <Form onFinish={formSubmit}>
                <Title data-testid='todo' level={4}>
                    Add Todo Item
            </Title>
                <Row typeof="flex" justify="center">
                    <FormInput data-testid="todo" setForm={handleForm} />
                    {form && form.length >= 5 ? <Calendar setDate={handleDate} /> : null}
                    {form && form.length < 5 ? (
                        <Title className="TitleLength" type="danger" level={4}>Length must be more than 5</Title>
                    ) : null}
                </Row>
                <Row>
                    <Button type="primary" htmlType="submit" block disabled={!hasDate}>
                        Add TODO
          </Button>
                </Row>
            </Form>
        </>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);