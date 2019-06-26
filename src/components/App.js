import React from "react";

import Todos from "./Todos";
import NewTodo from "./NewTodo";

class App extends React.Component {
  render() {
    return (
      <div>
        <NewTodo />
        <Todos />
      </div>
    );
  }
}

export default App;
