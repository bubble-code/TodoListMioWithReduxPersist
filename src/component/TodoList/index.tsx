import React, { StatelessComponent } from 'react'

import {List} from 'antd'

import {Todo} from '../../Store/Todo/Model/todo.model'
import {TodoItem} from '../TodoItem'

interface TodoListProps{
    todos: Todo[];
    onTodoRemoval: (todo:Todo)=> void;
    onTodoToggle: (todo: Todo) => void;
}

export const TodoLis: StatelessComponent<TodoListProps>=({todos, onTodoRemoval, onTodoToggle})=>(
    <List locale={{emptyText: "There is nothing to do : ("}} 
    dataSource={todos} renderItem={todo => (
        <TodoItem todo={todo} onTodoRemoval={onTodoRemoval} onTodoToggle={onTodoToggle}/>
    )}
    pagination={{ position:'bottom', pageSize: 10}}/>
);