import { element } from 'deku';

const people = [
  { id: 1, name: 'Tom' },
  { id: 2, name: 'Dick' },
  { id: 3, name: 'Harry' }
]

const el = (
  <ul>
    { people.map(person => <li key={ person.id }>{person.name}</li>) }
  </ul>
)

function render() {
  return (
    <div>
      { el }
    </div>
  )
}

function onCreate(model) {
  console.log(model);
}

export default {
  render,
  onCreate,
}
