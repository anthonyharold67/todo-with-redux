import { ADD_TODO,TOGGLE_TODO,DELETE_TODO,CLEAR_TODOS,EDIT_TODO } from "../types/todoTypes";

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload,
    };
}
export const toggleTodo = (payload) => {
    return {
        type: TOGGLE_TODO,
        payload: payload
    };
}
export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
}
}
export const clearTodos = (payload) => {
    return {
        type: CLEAR_TODOS,
    };
}
export const editTodo = (payload) => {
    return {
        type: EDIT_TODO,
        payload
    };
}
