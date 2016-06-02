import { element } from 'deku'
import { routeChange } from 'rd/actions'

export default {
  render ({ dispatch }) {
    return (
      <button onClick={onRouteChange(dispatch)}>Go to Home</button>
    )
  }
}

function onRouteChange (dispatch) {
  return () => dispatch(routeChange('/'))
}
