import React from "react";
import { connect } from "react-redux";

import Todo from "../containers/Todo";
import { toggleTodo } from "../actions";

const Todos = ({ todos, dispatch }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            {...todo}
          />
        );
      })}
    </ul>
  );
};

export default connect(
  state => ({
    todos: state
  }),
  null
)(Todos);
