import { Provider } from "react-redux";
import { mount } from "enzyme";
import MyApp from "../App";
import createStore from "./createStore";
export default function renderAppWithState(state) {
  const store = createStore(state);
  const wrapper = mount(
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
  return [store, wrapper];
}
