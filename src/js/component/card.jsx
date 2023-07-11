import React, { useState } from 'react';

function Card() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [total, setTotal] = useState(0);

  const handleInputCambio = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
      setTotal(total + 1);
    }
  };

  const handleBorrarTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setTotal(total - 1);
  };

  return (
    <div className="todo-list-container">
      <h1 className="todo-list-title">todos</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputCambio}
        onKeyPress={handleAddTodo}
        placeholder="Add a new task"
        className="todo-input"
      />
      {todos.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        <ul className="todo-items">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              {todo}
              <button onClick={() => handleBorrarTodo(index)} className="delete-button">
                <i className="fa-solid fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="total">
        {total} {total === 1 ? 'item left' : 'items left'}
      </div>
    </div>
  );
}

export default Card;