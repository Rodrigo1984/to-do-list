
// eslint-disable-next-line react/prop-types
const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            <div className="content">
              <p>{todo.text}</p>
              <p className='category'>({todo.category})</p>
            </div>
            <div>
              <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
              <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
            </div>
          </div>
  )
}

export default Todo
