import { element } from 'deku'
import { onRouteChange } from 'utils/index'

export default {
  render ({ dispatch, context: { route } }) {
    return (
      <div>
        <p>{route.params.id}</p>
        <button onClick={onRouteChange(dispatch, '/')}>Go to Home</button>
      </div>
    )
  }
}

