// Startup point for the client side application
import "@babel/polyfill"; // It's need for async and await api call
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import Routes from "./routes";
import rootReducers from "./reducers/rootReducers";

// const store = createStore(rootReducers, {}, applyMiddleware(thunk));

// Get Initial state from script
const initialState = window.INITIAL_STATE;
delete window.INITIAL_STATE;
// console.log(window.INITIAL_STATE);
// console.log(initialState);
const store = createStore(rootReducers, initialState, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
      {/* Not compitable in ssr and routes no longer react component */}
      {/* <Routes /> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// Not Need Because of the router setup
/* import Home from './components/Home';
ReactDOM.hydrate(<Home />, document.getElementById('root')); */
