import {Todo} from '../Model/todo.model'
import {TODO_CONSTANTS} from '../Constants'
import {TodoActionTypes} from '../Action/todo.actions.types'

export function addTodo(todo: Todo): TodoActionTypes{
    return{
        type: TODO_CONSTANTS.ADD_TODO_SUCCESS,
        payload: todo,
    }
}
export function removeTodo(todo: Todo):TodoActionTypes{
    return{
        type: TODO_CONSTANTS.REMOVE_TODO_SUCCESS,
        payload:todo
    }
}
export function toggleTodo(todo: Todo): TodoActionTypes{
    return{
        type: TODO_CONSTANTS.TOGGLE_TODO_SUCCESS,
        payload:todo
    }
}