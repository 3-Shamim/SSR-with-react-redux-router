import React from "react";
import { renderToString } from "react-dom/server";
// import Home from "../client/components/Home";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import Routes from "../client/routes";

export default (req, store) => {
  // This is not need because of the router setup
  // const content = renderToString(<Home />);

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
        {/* Not compitable in ssr and routes no longer react component */}
        {/* <Routes /> */}
      </StaticRouter>
    </Provider>
  );

  // Not protect XSS attack
  // const initialState = JSON.stringify(store.getState());

  // It protect XSS attact
  const initialState = serialize(store.getState());

  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="root">${content}</div>
            <script>
              window.INITIAL_STATE = ${initialState}
            </script>
            <script src="bundle.js"></script>
        </body>
        </html>
    `;
};
