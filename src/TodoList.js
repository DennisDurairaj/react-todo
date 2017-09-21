import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, remove}) => {
    return (
        <ul className="list-group">
            {todos.map((todo, i) =>
                <Todo todo={todo} key={i} remove={remove} />
            )}
        </ul>
    );
};

export default TodoList;