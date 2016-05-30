import { combineReducers } from 'redux'
import todos from './modules/todos'
import visibilityFilter from './modules/visibility-filter'

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
