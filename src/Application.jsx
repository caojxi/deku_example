import { element } from 'deku'

function addTodo (dispatch, id) {
  return event => {
    dispatch({
      text: document.getElementById(id).value,
      type: 'ADD_TODO'
    })
  }
}

export default {
  render ({ dispatch, context, path }) {
    return (
      <div>
        <input id={path} type={'text'} />
        <button onClick={addTodo(dispatch, path)}>Add Todo</button>
        <ul>
          {context.todos.map(todo => <li>{todo.text}</li>)}
        </ul>
      </div>
    )
  }
}
