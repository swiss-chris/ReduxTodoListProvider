import React from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import { addTodo, toggleTodo } from "./actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    },
    onNewTodoClick: input => {
      if (input.value !== "") {
        dispatch(addTodo(input.value));
      }
      input.value = "";
    }
  };
};

class App extends React.Component {
  render() {
    const { todos, onTodoClick, onNewTodoClick } = this.props;

    return (
      <div>
        <NewTodo onClick={onNewTodoClick} />
        <Todos todos={todos} onClick={onTodoClick} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
