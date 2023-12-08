import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">
          ({todo.category})</p>
      </div>
      <div className='btn-main'>
        <button className='complete' onClick={() => completeTodo(todo.id)}><ion-icon className="btn-icon" name="chevron-down-outline"></ion-icon></button>
        <button className='remove' onClick={() => removeTodo(todo.id)}><ion-icon className="btn-icon" name="close-outline"></ion-icon></button>
      </div>
  </div>
  )
}

export default Todo
