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
      <p>Inscreva-se</p>
      <p>TERMOS DE USO</p>
      <button onClick={goToApplicationFormPage}>Formulario</button>
    </div>
  );
};

export default SubscribePage;
