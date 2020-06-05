import { TODO_CONSTANTS } from '../Constants'
import { Todo } from '../Model/todo.model'
import { TodoActionTypes } from '../Action/todo.actions.types'
import { v4 as uuidV4 } from 'uuid'

interface TodoReducerInerface {
    todos: Todo[];
}
const initialState: TodoReducerInerface = {
    todos: [{id:uuidV4(),name:"Prueba",completed:false}]
};

export const todoReducer = (state = initialState, action: TodoActionTypes) => {
    switch (action.type) {
        case TODO_CONSTANTS.ADD_TODO_SUCCESS:
            return Object.assign({}, state, {
                todos: state.todos.concat({
                    ...action.payload,
                    ...{
                        id: uuidV4()
                    }
                })
            });
        case TODO_CONSTANTS.TOGGLE_TODO_SUCCESS:
            return Object.assign({}, state, {
                todos: state.todos.map((todo: Todo) => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                )
            });
        case TODO_CONSTANTS.REMOVE_TODO_SUCCESS:
            return {
                todos: state.todos.filter((todo: Todo) => todo.id !== action.payload.id)
            };
        default:
            return state;
    }
}