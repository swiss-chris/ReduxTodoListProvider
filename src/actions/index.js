import v4 from 'uuid'

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
    id: v4()
  };
};