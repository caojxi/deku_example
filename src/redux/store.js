import { createStore } from 'redux'
import reducers from './reducers/index'

const store = createStore(reducers, {}, window.devToolsExtension && window.devToolsExtension())

export default store
