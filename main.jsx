import { createApp, element } from 'deku'
import Application from './src/Application.jsx'
import { createStore } from 'redux'
import reducer from './src/redux/reducers.js'

const store = createStore(reducer)

const render = createApp(document.getElementById('mount'), store.dispatch)

// Rendering function
function update (Component) {
  render(<Component />, store.getState())
}

// First render
update(Application)

// Hooking into HMR
// This is the important part as it will reload your code and re-render the app accordingly
if (module.hot) {
  module.hot.accept('./src/Application.jsx', function () {
    const nextApplication = require('./src/Application.jsx').default
    update(nextApplication)
  })
}

