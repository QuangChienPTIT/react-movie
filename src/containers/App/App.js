import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "./App.css";
import routes from "../../routes";

const renderRoutes = (routes) => {
  var result = "";
  result = routes.map((routeItem, index) => {
    return (
      <Route
        key={index}
        exact={routeItem.exact}
        path={routeItem.path}
        component={routeItem.component}
      ></Route>
    );
  });
  return result;
};

function App() {
  return (
    <div className="App">
      <Switch>{renderRoutes(routes)}</Switch>
    </div>
  );
}

export default App;
