import { SET_VISIBILITY_FILTER } from './../../actions'

const defaultFilters = {
  SHOW_ALL: 'SHOW ALL',
  SHOW_ACTIVE: 'SHOW ACTIVE'
}

const { SHOW_ALL } = defaultFilters

function visibilityFilter (state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
