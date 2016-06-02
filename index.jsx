import { createApp, element } from 'deku'
import store from './src/redux/store'
import { routeChange } from './src/redux/actions'
import { createHistory } from 'history'
import Application from './src/Application.jsx'

const render = createApp(document.getElementById('app'), store.dispatch)

// rendering function
function update (Component, state) {
  render(<Component />, state)
}

// subscribe store change
store.subscribe(() => update(Application, store.getState()))

export const history = createHistory()
// subscribe for history change
history.listen(location => {
  store.dispatch(routeChange(location.pathname, { params: location.state }))
})

// first render
update(Application, store.getState())

// hooking into HMR
if (module.hot) {
  module.hot.accept('./src/Application.jsx', function () {
    const nextApplication = require('./src/Application.jsx').default
    update(nextApplication, store.getState())
  })
}
