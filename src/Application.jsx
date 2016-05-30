import { element } from 'deku'
import { addTodo } from 'rd/actions'

function onAdd (dispatch, id) {
  return event => {
    const text = document.getElementById(id).value

    if (text) {
      dispatch(addTodo(text))
    }
  }
}

export default {
  render ({ dispatch, context, path }) {
    return (
      <div>
        <input id={path} type={'text'} />
        <button onClick={onAdd(dispatch, path)}>Add Todo</button>
        <ul>
          {context.todos.map(todo => <li><button>Complete</button> {todo.text}</li>)}
        </ul>
      </div>
    )
  }
}
