import React from "react";
import RoutePages from "./Routes/RoutePages";
import { store } from "./reduxStore/store";
import { Provider } from "react-redux";
import "./features/menu/menuSlice.js";
const App = () => {
  return (
    <main className="font-poppins">
      <Provider store={store}>
        <RoutePages />
      </Provider>
    </main>
  );
};

export default App;
