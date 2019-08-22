import React from "react";

import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodo />
        <Todos />
      </div>
    );
  }
}

export default App;
