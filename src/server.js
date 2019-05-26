import "@babel/polyfill"; // It's need for async and await api call
import express from "express";
import renderer from "./helpers/renderer";
import CreateStore from "./helpers/createStore";
import { matchRoutes } from "react-router-config";
import Routes from "./client/routes";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = CreateStore();

  // Some logic to initialize
  // and load data into the store
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
