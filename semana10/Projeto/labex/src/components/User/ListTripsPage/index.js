import React from "react";
import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";
import BaseUrl from "../../BaseUrl";
import axios from "axios";

const SubscribePage = () => {
  const pathParams = useParams();
  const history = useHistory();
  const [tripLists, setTripLists] = useState([]);

  useEffect(() => {
    getListOfTrips();
  }, [{}]);

  const goToApplicationFormPage = () => {
    history.push("/ApplicationFormPage");
  };

  const getListOfTrips = () => {
    axios
      .get(`${BaseUrl}/trips`)
      .then((response) => {
        setTripLists(response.data.trips);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const renderListOfTrips = tripLists.map((trips) => {
    return (
      <div onClick={goToApplicationFormPage}>
        <ul>
          <li>{trips.planet}</li>
          <li>{trips.name}</li>
          <li>{trips.date}</li>
          <li>{trips.description}</li>
          <li>{trips.durationInDays}</li>
          
        </ul>
        
        <hr />
      </div>
    );
  });

  return (
    <div>
      <h1>Lista de Destinos</h1>
      {renderListOfTrips}

      <button onClick={goToApplicationFormPage}>Ir para Formulario</button>
    </div>
  );
};

export default SubscribePage;
