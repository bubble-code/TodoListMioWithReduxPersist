import React, { FC } from 'react'
import { Row, Col, Card, PageHeader } from 'antd'

import { Todo } from '../../Store/Todo/Model/todo.model'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, toggleTodo } from '../../Store/Todo/Action'
import { RootState } from '../../Store/Todo/Reducer'
import { AddTodoForm } from '../../component/AddTodoForm'
import { TodoLis } from '../../component/TodoList'
import { message } from 'antd'

import './style.css'
import { Sider } from '../MenuLeft'

interface TodosContainerProps { }

export const TodosContainer: FC<TodosContainerProps> = () => {
    const todos: Todo[] = useSelector((state: RootState) => state.todo.todos);

    const dispatch = useDispatch();

    const handleFormSubmit = (todo: Todo): void => {
        dispatch(addTodo(todo));
        message.success('Todo added');
    }
    const handleRemoveTodo = (todo: Todo): void => {
        dispatch(removeTodo(todo));
        message.warn('Todo removed!');
    };
    const handleTodoToggle = (todo: Todo): void => {
        dispatch(toggleTodo(todo));
        message.info('Todo state updated!');
    };

    return (       
            <Col  xs={{ span: 18 }} sm={{ span: 18 }} md={{ span: 18 }} lg={{ span: 18 }} xl={{ span: 18 }}>
                <PageHeader className='title-header' title="List Task" subTitle="To add a todo, just fill the form below and click in add todo" />
                <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 21 }} lg={{ span: 20 }} xl={{ span: 23 }}>
                    <Card title="Create a new todo">
                        <AddTodoForm onFormSubmit={handleFormSubmit} />
                    </Card>
                </Col>
                <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 21 }} lg={{ span: 20 }} xl={{ span: 23 }}>
                    <Card title="Todo List">
                        <TodoLis todos={todos} onTodoRemoval={handleRemoveTodo} onTodoToggle={handleTodoToggle} />
                    </Card>
                </Col>
            </Col>
    );

};