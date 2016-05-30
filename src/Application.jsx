import { element } from 'deku'
import { addTodo, toggleTodo } from 'rd/actions'
import { css } from 'utils/index'

export default {
  render ({ dispatch, path, context: { todos, visibilityFilter } }) {
    return (
      <div>
        <input id={path} type='text' />
        <button onClick={onAdd(dispatch, path)}>Add Todo</button>
        <ul>
          {todos.map(todo =>
          <li style={todo.completed ? completed : ''}>
            <button onClick={onToggle(dispatch, todo.id)}>{!todo.completed ? 'Complete' : 'Uncomplete'}</button> {todo.text}
          </li>
          )}
        </ul>
      </div>
    )
  }
}

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

const completed = css({
  color: 'gray',
  textDecoration: 'line-through'
})

