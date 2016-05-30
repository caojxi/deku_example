import { element } from 'deku'

function addTodo (dispatch, id) {
  return event => {
    const text = document.getElementById(id).value

    if (text) {
      dispatch({
        text,
        type: 'ADD_TODO'
      })
    }
  }
}

export default {
  render ({ dispatch, context, path }) {
    return (
      <div>
        <input id={path} type={'text'} />
        <button onClick={addTodo(dispatch, path)}>Add Todo</button>
        <ul>
          {context.todos.map(todo => <li><button>Complete</button> {todo.text}</li>)}
        </ul>
      </div>
    )
  }
}
