import React from 'react';

const TodoForm = ({addTodo}) => {
    let input;

    return (
        <div>
            <form
                onSubmit={(e) => {
                e.preventDefault();
                addTodo(input.value);
                input.value = '';
            }}>
                <div className="form-group">
                    <input
                        className="form-control"
                        ref={node => {
                        input = node;
                    }}/>
                </div>
            </form>
            <br/>
        </div>
    );
};

export default TodoForm;