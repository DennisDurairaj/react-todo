import dispatcher from '../dispatcher';

export function addTodo(text) {
  dispatcher.dispatch({
    type: "ADD_TODO",
    text
  });
}

export function removeTodo(id) {
  dispatcher.dispatch({
    type: "REMOVE_TODO",
    id
  });
}
