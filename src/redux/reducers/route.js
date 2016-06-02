import { ROUTE_CHANGE } from './../actions'

const defaultRoute = {
  path: '/',
  params: {},
  query: {}
}

function router (state = defaultRoute, action) {
  switch (action.type) {
    case ROUTE_CHANGE:
      return Object.assign({}, state, action)

    default:
      return state
  }
}

export default router
