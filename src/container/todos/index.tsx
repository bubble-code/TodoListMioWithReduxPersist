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
        <Row justify="center" align="middle" gutter={[0, 20]} className="todos-container">
            <Col xs={{ span: '23' }} sm={{ span: '23' }} md={{ span: '21' }} lg={{ span: '20' }} xl={{ span: '18' }}>
                <PageHeader title="Add Todo" subTitle="To add a todo, just fill the form below and click in add todo" />
            </Col>
            <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 21 }} lg={{ span: 20 }} xl={{ span: 18 }}>
                <Card title="Create a new todo">
                    <AddTodoForm onFormSubmit={handleFormSubmit} />
                </Card>
            </Col>
            <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 21 }} lg={{ span: 20 }} xl={{ span: 18 }}>
                <Card title="Todo List">
                    <TodoLis todos={todos} onTodoRemoval={handleRemoveTodo} onTodoToggle={handleTodoToggle} />
                </Card>
            </Col>

        </Row>
    );

};