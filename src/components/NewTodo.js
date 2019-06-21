import React from "react";

const NewTodo = props => {
  let input;

  return (
    <div>
      <input
        ref={node => (input = node)}
        onKeyDown={e => {
          if (e.key === "Enter") {
            props.onClick(input);
          }
        }}
      />
      <button onClick={() => props.onClick(input)}>ADD</button>
    </div>
  );
};

export default NewTodo;
