import React from "react";
import { useParams, useHistory } from "react-router";

const SubscribePage = () => {
  const pathParams = useParams();
  const history = useHistory();


  const goToApplicationFormPage = () => {
    history.push("/ApplicationFormPage");
  }


  return (
    <div>
      <p>Lista de Destinos</p>
      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
      </ul>
      <button onClick={goToApplicationFormPage}>Ir para Formulario</button>
    </div>
  );
};

export default SubscribePage;
