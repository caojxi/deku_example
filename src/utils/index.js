import { routeChange } from 'rd/actions'
import { history } from './../../index'

export function onRouteChange (dispatch, path) {
  return () => {
    dispatch(routeChange(path))
    history.push({
      pathname: path
    })
  }
}
