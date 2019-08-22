import React from "react";
import { createStore } from "redux";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import uuid from 'uuid/v4';

import App from "../App";
import reducer from "../reducer";

//// -------------------- ////

jest.mock('uuid/v4');

Enzyme.configure({ adapter: new Adapter() });

let appWrapper, store;

//// -------------------- ////

beforeEach(() => {
  initUuidMock(); // start over at ID=0 for every test
  ({ appWrapper, store } = initAppWrapper()); // start each test with an empty store
});

//// -------------------- ////

test("Add todo", () => {
  appWrapper.find("input").instance().value = "abc";
  expect(appWrapper.find("input").instance().value).toEqual("abc");

  appWrapper.find("button").simulate("click");
  expect(store.getState()).toEqual([
    {
      id: 0,
      text: "abc",
      completed: false
    }
  ]);
});

test("Add 2 todos and toggle", () => {

  appWrapper.find("input").instance().value = "123";
  appWrapper.find("button").simulate("click");
  appWrapper.find("input").instance().value = "cde";
  appWrapper.find("button").simulate("click");
  expect(store.getState()).toEqual([
    {
      id: 0,
      text: "123",
      completed: false
    },
    {
      id: 1,
      text: "cde",
      completed: false
    }
  ]);

  appWrapper
    .find("li")
    .filterWhere(n => n.text() === "123")
    .simulate("click");
  expect(store.getState()).toEqual([
    {
      id: 0,
      text: "123",
      completed: true
    },
    {
      id: 1,
      text: "cde",
      completed: false
    }
  ]);

  appWrapper
    .find("li")
    .filterWhere(n => n.text() === "123")
    .simulate("click");
  appWrapper
    .find("li")
    .filterWhere(n => n.text() === "cde")
    .simulate("click");
  expect(store.getState()).toEqual([
    {
      id: 0,
      text: "123",
      completed: false
    },
    {
      id: 1,
      text: "cde",
      completed: true
    }
  ]);
});

//// -------------------- ////

function initAppWrapper() {
  const store = createStore(reducer);
  const appWrapper = Enzyme.mount(<App store={store} />);
  return { appWrapper, store };
}

function initUuidMock() {
  const increment = (() => {
    let count = 0;
    const inc = () => {
      return count++;
    };
    return inc;
  })();

  uuid.mockImplementation(increment);
}
