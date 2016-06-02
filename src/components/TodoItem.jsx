import { element } from 'deku'
import { onRouteChange } from 'utils/index'

export default {
  render ({ dispatch }) {
    return (
      <button onClick={onRouteChange(dispatch, '/')}>Go to Home</button>
    )
  }
}

