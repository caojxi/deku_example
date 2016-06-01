import { element } from 'deku'
import { addTodo, removeTodo, toggleTodo } from 'rd/actions'
import { inlinecss } from 'utils/index'

const style = require('assets/ccs/Application.css')

function onEnter (dispatch, id) {
  return event => {
    const text = document.getElementById(id).value

    if (event.keyCode === 13 && text) {
      dispatch(addTodo(text, `${Date.now()}${Math.random().toString()}`))
    }
  }
}

function onRemove (dispatch, id) {
  return event => {
    dispatch(removeTodo(id))
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
      <div class={style.app}>
        <input id={path} type='text' onKeyDown={onEnter(dispatch, path)} />
        <button>{visibilityFilter}</button>
        <ul>
          {todos.map(todo =>
          <li class={todo.completed ? style.completed : ''}>
            <button onClick={onRemove(dispatch, todo.id)}>X</button>
            <button onClick={onToggle(dispatch, todo.id)}>
              {!todo.completed ? 'Complete' : 'Uncomplete'}
            </button>
            {todo.text}
          </li>
          )}
        </ul>
      </div>
    )
  }
}

