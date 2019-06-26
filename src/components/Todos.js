import React from "react";
import { connect } from "react-redux";

import Todo from "../containers/Todo";
import { toggleTodo } from "../actions";

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

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
  mapStateToProps,
  mapDispatchToProps
)(Todos);
