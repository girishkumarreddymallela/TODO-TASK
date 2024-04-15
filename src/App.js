import React from "react";
import TODOLIST from "./components/todoList";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <TODOLIST />
  </Provider>
);

export default App;
