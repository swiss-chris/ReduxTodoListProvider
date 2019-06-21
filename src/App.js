import React from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import { connect } from "react-redux";

const newTodoIndex = (() => {
  let count = 0;
  const inc = () => {
    return count++;
  };
  return inc;
})();

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch({
        type: "TOGGLE",
        id
      });
    },
    onNewTodoClick: input => {
      if (input.value !== "") {
        dispatch({
          type: "ADD",
          text: input.value,
          id: newTodoIndex()
        });
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
