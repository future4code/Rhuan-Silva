import React from "react";
import { useParams } from "react-router";

const AboutPage = () => {
  const pathParams = useParams();

  return (
    <div>
      <p>Sobre</p>
      <p>Linguagem selecionada: {pathParams.linguagem}</p>
    </div>
  );
};

export default AboutPage;
