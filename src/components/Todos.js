import React from "react";
import { connect } from "react-redux";

import Todo from "../containers/Todo";
import { toggleTodo } from "../actions";

const Todos = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <Todo key={todo.id} onClick={() => onTodoClick(todo.id)} {...todo} />
        );
      })}
    </ul>
  );
};

export default connect(
  state => ({
    todos: state
  }),
  dispatch => ({
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  })
)(Todos);
