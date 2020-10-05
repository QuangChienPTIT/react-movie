import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import routes from "../../routes";

const renderRoutes = (routes) => {
  var result = "";
  result = routes.map((routeItem, index) => {
    return (
      <Route
        key={index}
        path={routeItem.path}
        exact={routeItem.exact}
        component={routeItem.component}
      ></Route>
    );
  });
  return result;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>{renderRoutes(routes)}</Switch>
      </div>
    </Router>
  );
}

export default App;
