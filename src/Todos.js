import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, onClick }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <Todo key={todo.id} onClick={() => onClick(todo.id)} {...todo} />
        );
      })}
    </ul>
  );
};

export default Todos;
