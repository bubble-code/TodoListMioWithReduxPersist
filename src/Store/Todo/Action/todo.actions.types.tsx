import {TODO_CONSTANTS} from '../Constants'
import {Todo} from '../Model/todo.model'

interface AddTodoAction {
    type: typeof TODO_CONSTANTS.ADD_TODO_SUCCESS;
    payload: Todo;
}
interface ToggleTodoAction {
    type: typeof TODO_CONSTANTS.TOGGLE_TODO_SUCCESS;
    payload: Todo;
}
interface RemoveTodoACtion {
    type: typeof TODO_CONSTANTS.REMOVE_TODO_SUCCESS;
    payload: Todo;
}

export type TodoActionTypes = | AddTodoAction | ToggleTodoAction | RemoveTodoACtion;