import React from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

class App extends React.Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <NewTodo store={this.props.store} />
        <Todos store={this.props.store} />
      </div>
    );
  }
}

export default App;
