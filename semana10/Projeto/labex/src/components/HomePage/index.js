import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const goToAboutPage = () => {
    history.push("/sobre/portugues");
  };
  const goToSubscribePage = () => {
    history.push("/SubscribePage");
  };
  const goToListTripsPage = () => {
    history.push("/ListTripsPage");
  };

  return (
    <div>
      <p>Home</p>
      <button onClick={goToAboutPage}>Ir para página de sobre</button>
      <button onClick={goToListTripsPage}>Ir para página de Lista de Viagens</button>
      <button onClick={goToSubscribePage}>Ir para página de Inscrição</button>
    </div>
  );
};

export default HomePage;
