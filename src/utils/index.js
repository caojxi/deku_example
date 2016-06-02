import { routeChange } from 'rd/actions'
import { history } from './../../index'

export function onRouteChange (dispatch, path, { params: params = {}, query: query = {}} = {}) {
  return () => {
    dispatch(routeChange(path, { params, query }))
    history.push({
      pathname: path,
      state: params
    })
  }
}
