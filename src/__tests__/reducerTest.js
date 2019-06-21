import expect from "expect";
import deepFreeze from "deep-freeze";
import reducer from "../reducer";

const todo = {
  text: "existing Todo Text",
  id: 0,
  completed: false
};

const addAction = {
  type: "ADD",
  text: "actionText",
  id: 1
};

const addedTodo = {
  text: addAction.text,
  id: addAction.id,
  completed: false
};

test("Testing unknown action returns empty array", () => {
  expect(reducer([], { type: "UNKNOWN" })).toEqual([]);
});

test("Testing ADD to empty array", () => {
  const stateBefore = [];
  const stateAfter = [addedTodo];

  deepFreeze(stateBefore);

  expect(reducer(stateBefore, addAction)).toEqual(stateAfter);
});

test("Testing ADD to array with one", () => {
  const stateBefore = [todo];
  const stateAfter = [todo, addedTodo];

  deepFreeze(stateBefore);

  expect(reducer(stateBefore, addAction)).toEqual(stateAfter);
});

test("Toggle todo COMPLETED", () => {
  const stateBefore = [todo, addedTodo];
  const toggleAction = { type: "TOGGLE", id: addedTodo.id };
  const stateAfter = [todo, { ...addedTodo, completed: !addedTodo.completed }];

  deepFreeze(stateBefore);

  expect(reducer(stateBefore, toggleAction)).toEqual(stateAfter);
});

test("Toggle todo UNDO", () => {
  const stateBefore = [{ ...todo, completed: true }, addedTodo];
  const toggleAction = { type: "TOGGLE", id: todo.id };
  const stateAfter = [todo, addedTodo];

  deepFreeze(stateBefore);

  expect(reducer(stateBefore, toggleAction)).toEqual(stateAfter);
});
