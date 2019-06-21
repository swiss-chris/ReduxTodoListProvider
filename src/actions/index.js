export const toggleTodo = id => {
  return {
    type: "TOGGLE",
    id
  };
};

export const addTodo = text => {
  return {
    type: "ADD",
    text: text,
    id: newTodoIndex()
  };
};

const newTodoIndex = (() => {
  let count = 0;
  const inc = () => {
    return count++;
  };
  return inc;
})();
