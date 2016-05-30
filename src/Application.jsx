import { element } from 'deku'
import { addTodo, toggleTodo } from 'rd/actions'

function onAdd (dispatch, id) {
  return event => {
    const text = document.getElementById(id).value

    if (text) {
      dispatch(addTodo(text, `${Date.now()}${Math.random().toString()}`))
    }
  }
}

function onToggle (dispatch, id) {
  return event => {
    dispatch(toggleTodo(id))
  }
}

export default {
  render ({ dispatch, path, context: { todos, visibilityFilter } }) {
    return (
      <div>
        <input id={path} type='text' />
        <button onClick={onAdd(dispatch, path)}>Add Todo</button>
        <ul>
          {todos.map(todo =>
          <li class={ todo.completed ? 'completed' : 'uncompleted' }>
            <button onClick={onToggle(dispatch, todo.id)}>Complete</button> {todo.text}
          </li>
          )}
        </ul>
      </div>
    )
  }
}
