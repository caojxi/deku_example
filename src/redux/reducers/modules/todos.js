import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from './../../actions'

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: false
        }
      ]

    case REMOVE_TODO:
      return state.filter(todo => {
        return todo.id !== action.id
      })

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })

    default:
      return state
  }
}

export default todos
