import { element } from 'deku'
import routes from './routes'

export default {
  render ({ context: { route } }) {
    const Component = findComponentByPath(route.path)

    return (
      <div class='app'>
        <Component />
      </div>
    )
  }
}

function findComponentByPath (path) {
  for (const route of routes) {
    if (route.path === path) {
      return route.component
    }
  }

  return null
}

