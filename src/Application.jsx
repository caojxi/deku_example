import { element } from 'deku'
import routes from './routes'

function findComponentByPath (path) {
  for (const route of routes) {
    if (route.path === path) {
      return route.component
    }
  }

  return null
}

export default {
  render () {
    const Component = findComponentByPath('/')

    return <Component />
  }
}

