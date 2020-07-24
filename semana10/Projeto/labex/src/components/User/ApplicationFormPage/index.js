import React, { useState, useEffect } from "react";
import useForm from "../../UseForm.js"
import CountryList from "../../CountryList"

const ApplicationFormPage = () => {
  const { form, onChange } = useForm({
    name: "",
    age: "",
    profession: "",
    country: "",
    applicationText: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSave = (event) => {
    event.preventDefault();
    console.log('oi');
  }

  return (
    <div>
      <h1>Sobre</h1>
      <h3>FORMULARIO DE INSCRIÇÃO </h3>
      <form onSubmit={handleSave}>
        <input
          name="name"
          value={form.name}
          onChange={handleInput}
          type="text"
          required
          placeholder=""
          pattern={'[A-Z a-z]{3,}'}
          title='O nome deve ter no minimo 3 letras'
        />
        <input
          name="age"
          value={form.age}
          onChange={handleInput}
          type="number"
          min={18}
          required
          placeholder=""
        />
        <input
          name="profession"
          value={form.profession}
          onChange={handleInput}
          type="text"
          required
          placeholder=""
        />
        {/* <input
          name="country"
          value={form.country}
          onChange={handleInput}
          type="text"
          required
          placeholder=""
        /> */}
        <CountryList/>
        <textarea
          name="applicationText"
          value={form.applicationText}
          onChange={handleInput}
          type="textarea"
          row='10'
          cols='30'
          required
          pattern={'[A-Z a-z 0-9]{30,}'}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ApplicationFormPage;
