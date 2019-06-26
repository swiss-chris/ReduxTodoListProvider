const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default reducer;
