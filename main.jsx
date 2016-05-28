import { createApp, element } from 'deku'
import { createStore } from 'redux'
import reducers from './src/redux/reducers.js'
import Application from './src/Application.jsx'

const store = createStore(reducers)

const render = createApp(document.getElementById('app'), store.dispatch)

// Rendering function
function update (Component, state) {
  render(<Component />, state)
}

// subscribe store change
store.subscribe(() => update(Application, store.getState()))

// First render
update(Application, store.getState())
