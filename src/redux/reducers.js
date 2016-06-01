import { combineReducers } from 'redux'
import router from './reducer-modules/route'
import todos from './reducer-modules/todos'
import visibilityFilter from './reducer-modules/visibility-filter'

const todoApp = combineReducers({
  router,
  visibilityFilter,
  todos
})

export default todoApp
