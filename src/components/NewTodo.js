import React from "react";

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
              this.props.onClick(this.input);
            }
          }}
        />
        <button onClick={() => this.props.onClick(this.input)}>ADD</button>
      </div>
    );
  }
}

export default NewTodo;
