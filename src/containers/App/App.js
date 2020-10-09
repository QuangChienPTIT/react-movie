import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
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
      <NavBar></NavBar>
      <div className="App p-2">
        <Switch>{renderRoutes(routes)}</Switch>
      </div>
    </Router>
  );
}

export default App;
