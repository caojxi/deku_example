import { combineReducers } from 'redux'
import todos from './reducer-modules/todos'
import visibilityFilter from './reducer-modules/visibility-filter'

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
