import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        console.log(value, category);
        //Adicionar todo
        // limpar os campos
        addTodo(value, category);
        setValue("");
        setCategory("")

    };

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa:</h2>
   <form onSubmit={handleSubmit}>
        <input
         type="text"
          placeholder='Digite o título'
          value={value}
        onChange={(e) => setValue(e.target.value)}/>
        <select onChange={(e) => setCategory(e.target.value)}
        value={category}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button className='create-btn' type='submit'>Criar tarefa</button>
   </form>
    </div>
  )
}

export default TodoForm
