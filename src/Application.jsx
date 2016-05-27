import { element } from 'deku'

function addTodo (dispatch, text) {
  return event => {
    dispatch({
      text,
      type: 'ADD_TODO'
    })
  }
}

function render ({ dispatch, context }) {
  return (
    <div>
      <button onClick={addTodo(dispatch, 'test')}>Add Todo</button>
      <ul>
        {context.todos.map(todo => <li>{todo.text}</li>)}
      </ul>
    </div>
  )
}

function onCreate (model) {
  console.log(model)
}

export default {
  render,
  onCreate
}
