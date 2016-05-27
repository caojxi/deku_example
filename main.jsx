import { createApp, element } from 'deku'
import Application from './src/Application.jsx'

const render = createApp(document.getElementById('mount'))

// Rendering function
function update (Component) {
  render(<Component />)
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

