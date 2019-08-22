import React from "react";
import { v4 } from 'uuid';

const handleNewTodoClick = (store, input, id) => {
  if (input.value !== "") {
    store.dispatch({
      type: "ADD",
      text: input.value,
      id
    });
  }
  input.value = "";
};

class NewTodo extends React.Component {
  render() {
    return (
      <div>
        <input
          ref={node => {
            this.input = node;
          }}
          onKeyDown={e => {
            if (e.key === "Enter") {
              handleNewTodoClick(this.props.store, this.input, v4());
            }
          }}
        />
        <button
          onClick={() =>
            handleNewTodoClick(this.props.store, this.input, v4())
          }
        >
          ADD
        </button>
      </div>
    );
  }
}

export default NewTodo;
