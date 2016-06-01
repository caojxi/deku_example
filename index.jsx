import { createApp, element } from 'deku'
import store from './src/redux/store'
import Application from './src/Application.jsx'

const render = createApp(document.getElementById('app'), store.dispatch)

// Rendering function
function update (Component, state) {
  render(<Component />, state)
}

// subscribe store change
store.subscribe(() => update(Application, store.getState()))

// First render
update(Application, store.getState())

// Hooking into HMR
// This is the important part as it will reload your code and re-render the app accordingly
if (module.hot) {
  module.hot.accept('./src/Application.jsx', function () {
    const nextApplication = require('./src/Application.jsx').default
    update(nextApplication, store.getState())
  })
}
