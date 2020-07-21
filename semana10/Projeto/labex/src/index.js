import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Importando as páginas
import HomePage from "./components/HomePage";
import AboutPage from "./components/User/AboutPage";
import ApplicationFormPage from "./components/User/ApplicationFormPage";
import CreateTripPage from "./components/Admin/Router/CreateTripPage";
import ListTripsPage from "./components/User/ListTripsPage";
import LoginPage from "./components/LoginPage";
import Router from "./components/Router";
import SubscribePage from "./components/User/SubscribePage";
import TripDetailsPage from "./components/Admin/Router/TripDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/ApplicationFormPage">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/CreateTripPage">
          <CreateTripPage />
        </Route>
        <Route exact path="/ListTripsPage">
          <ListTripsPage />
        </Route>
        <Route exact path="/LoginPage">
          <LoginPage />
        </Route>
        <Route exact path="/Router">
          <Router />
        </Route>
        <Route exact path="/SubscribePage">
          <SubscribePage />
        </Route>
        <Route exact path="/sobre/:linguagem">
          <AboutPage />
        </Route>
        <Route exact path="/TripDetailsPage">
          <TripDetailsPage />
        </Route>
        <Route path="/">
          <h3>Eita Giovana, o forninho caiu (404)</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
