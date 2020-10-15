import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import MobileHeader from "../MobileHeader/MobileHeader";
import Sidebar from "../Sidebar/Sidebar";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
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
      <ScrollToTop></ScrollToTop>
      <NavBar></NavBar>
      <MobileHeader className="d-md-none"></MobileHeader>
      <Sidebar></Sidebar>
      <div className="App">
        <Switch>{renderRoutes(routes)}</Switch>
      </div>
    </Router>
  );
}

export default App;
