import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const goToAboutPage = () => {
    history.push("/about/portugues");
  };
  const goToSubscribePage = () => {
    history.push("/subscribe-page");
  };
  const goToLoginPage = () => {
    history.push("/login-page");
  };
  const goToListTripsPage = () => {
    history.push("/list-trips");
  };

  return (
    <div>
      <p>Home</p>
      <button onClick={goToAboutPage}>Ir para página de sobre</button>
      <button onClick={goToListTripsPage}>Ir para página de Lista de Viagens</button>
      <button onClick={goToSubscribePage}>Ir para página de Inscrição</button>
      <button onClick={goToLoginPage}>Ir para login</button>
    </div>
  );
};

export default HomePage;
