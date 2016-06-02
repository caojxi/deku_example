import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'

import route from './reducers/route'
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibility-filter'

const todoApp = combineReducers({
  route,
  visibilityFilter,
  todos
})

const middlewares = applyMiddleware(createLogger())

const store = createStore(todoApp, {}, compose(
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store
