import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Importando as páginas
import HomePage from "./components/HomePage";
import AboutPage from "./components/User/AboutPage";
import ApplicationFormPage from "./components/User/ApplicationFormPage";
import CreateTripPage from "./components/Admin/CreateTripPage";
import ListTripsPage from "./components/User/ListTripsPage";
import LoginPage from "./components/LoginPage";
import Router from "./components/Admin/Router";
import SubscribePage from "./components/User/SubscribePage";
import TripDetailsPage from "./components/Admin/TripDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/subscribe-form">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/create-trip">
          <CreateTripPage />
        </Route>
        <Route exact path="/list-trips">
          <ListTripsPage />
        </Route>
        <Route exact path="/login-page">
          <LoginPage />
        </Route>
        <Route exact path="/router">
          <Router />
        </Route>
        <Route exact path="/subscribe-page">
          <SubscribePage />
        </Route>
        <Route exact path="/about/:linguagem">
          <AboutPage />
        </Route>
        <Route exact path="/trip-detail-page">
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
