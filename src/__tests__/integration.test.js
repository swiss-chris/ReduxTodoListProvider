import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import uuid from 'uuid/v4';

import App from "../components/App";
import { reducer } from "../reducers/reducer";

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

test("Add todo with Button", () => {
  appWrapper.find("input").instance().value = "withButton";
  expect(appWrapper.find("input").instance().value).toEqual("withButton");

  appWrapper.find("button").simulate("click");
  expect(store.getState()).toEqual([
    {
      id: 0,
      text: "withButton",
      completed: false
    }
  ]);
});

test("Add todo with Enter Key", () => {
  appWrapper.find("input").instance().value = "withEnter";
  expect(appWrapper.find("input").instance().value).toEqual("withEnter");

  appWrapper.find("input").simulate("keyDown", { key: "Enter" });
  expect(store.getState()).toEqual([
    {
      id: 0,
      text: "withEnter",
      completed: false
    }
  ]);
});

test("Add 2 todos and toggle", () => {

  appWrapper.find("input").instance().value = "abc";
  appWrapper.find("button").simulate("click");
  appWrapper.find("input").instance().value = "cde";
  appWrapper.find("button").simulate("click");
  expect(store.getState()).toEqual([
    {
      id: 0,
      text: "abc",
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
    .filterWhere(n => n.text() === "abc")
    .simulate("click");
  expect(store.getState()).toEqual([
    {
      id: 0,
      text: "abc",
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
    .filterWhere(n => n.text() === "abc")
    .simulate("click");
  appWrapper
    .find("li")
    .filterWhere(n => n.text() === "cde")
    .simulate("click");
  expect(store.getState()).toEqual([
    {
      id: 0,
      text: "abc",
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
  const appWrapper = Enzyme.mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
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
