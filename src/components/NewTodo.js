import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const mapDispatchToProps = dispatch => ({
  onNewTodoClick: input => {
    if (input.value !== "") {
      dispatch(addTodo(input.value));
    }
    input.value = "";
  }
});

const NewTodo = ({ onNewTodoClick }) => {
  let input;

  return (
    <div>
      <input
        ref={node => (input = node)}
        onKeyDown={e => {
          if (e.key === "Enter") {
            onNewTodoClick(input);
          }
        }}
      />
      <button onClick={() => onNewTodoClick(input)}>ADD</button>
    </div>
  );
};

export default connect(
  undefined,
  mapDispatchToProps
)(NewTodo);
