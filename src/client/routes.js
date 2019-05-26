// import React from "react";
// import { Route } from "react-router-dom";
import Home from "./components/homePages/Home";
// import UsersList, { loadData } from "./components/userPages/UsersList";
import UsersList from "./components/userPages/UsersList";

export default [
  {
    ...Home,
    path: "/",
    // component: Home,
    exact: true
  },
  {
    ...UsersList,
    // loadData,
    path: "/users"
    // component: UsersList
  }
];

// Not compitable for ssr
/* export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UsersList} />

      <Route path="/hi" component={() => "Hi"} />
    </div>
  );
}; */
