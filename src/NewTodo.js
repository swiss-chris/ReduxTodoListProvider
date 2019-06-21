import React from "react";

const newTodoIndex = (() => {
  let count = 0;

  const inc = () => {
    return count++;
  };

  return inc;
})();

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
              handleNewTodoClick(this.props.store, this.input, newTodoIndex());
            }
          }}
        />
        <button
          onClick={() =>
            handleNewTodoClick(this.props.store, this.input, newTodoIndex())
          }
        >
          ADD
        </button>
      </div>
    );
  }
}

export default NewTodo;
