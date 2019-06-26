import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input
        ref={node => (input = node)}
        onKeyDown={e => {
          if (e.key === "Enter") {
            onNewTodoClick(dispatch, input);
          }
        }}
      />
      <button onClick={() => onNewTodoClick(dispatch, input)}>ADD</button>
    </div>
  );
};

const onNewTodoClick = (dispatch, input) => {
  if (input.value !== "") {
    dispatch(addTodo(input.value));
  }
  input.value = "";
};

export default connect()(AddTodo);
