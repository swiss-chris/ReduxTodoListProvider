import React from "react";
import Todo from "./Todo";

const handleTodoClick = (store, id) => {
  store.dispatch({
    type: "TOGGLE",
    id
  });
};

const Todos = ({ store }) => {
  return (
    <ul>
      {store.getState().map(todo => {
        return (
          <Todo
            key={todo.id}
            onClick={() => handleTodoClick(store, todo.id)}
            {...todo}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
