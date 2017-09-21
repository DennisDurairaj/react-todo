import React from 'react';

const Todo = ({todo, remove}) => {
    return (
        <li className="list-group-item" onClick={() => {
            remove(todo.id)
        }}>
        {todo.text}
        </li>
    );
};

export default Todo;