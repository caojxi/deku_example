export const ADD_TODO = 'ADD_TODO'
export function addTodo (text, id) { return { type: ADD_TODO, text, id } }

export const REMOVE_TODO = 'REMOVE_TODO'
export function removeTodo (id) { return { type: REMOVE_TODO, id } }

export const TOGGLE_TODO = 'TOGGLE_TODO'
export function toggleTodo (id) { return { type: TOGGLE_TODO, id } }

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export function setVisibilityFilter (filter) { return { type: SET_VISIBILITY_FILTER, filter } }
