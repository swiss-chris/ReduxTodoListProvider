import React from "react";
import { createStore } from "redux";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";
import reducer from "../reducer";

Enzyme.configure({ adapter: new Adapter() });

const store = createStore(reducer);

export default function renderAppWithState() {
  const wrapper = Enzyme.mount(<App store={store} />);
  return [store, wrapper];
}

const [, wrapper] = renderAppWithState();

test("Add todo", () => {
  wrapper.find("input").instance().value = "abc";
  expect(wrapper.find("input").instance().value).toEqual("abc");
  wrapper.find("button").simulate("click");
  expect(store.getState()).toEqual([
    {
      id: 0,
      text: "abc",
      completed: false
    }
  ]);
});
