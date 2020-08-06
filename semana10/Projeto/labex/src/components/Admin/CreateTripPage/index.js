import React,{ useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import useForm from "../../UseForm";

const CreateTripPage = () => {
    const history = useHistory()
  const { form, onChange } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  useEffect(() => {
      const token = window.localStorage.getItem('token')

      if (token !== null) {
          history.push('/create-trip')
      } else{
          history.push('/')
      }
  })

  const handleInput = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  return (
    <form>
      <h1>Create Trip</h1>
      <input
        name="name"
        value={form.name}
        onChange={handleInput}
        type="text"
        required
        placeholder="Nome"
        pattern={"[A-Z a-z]{3,}"}
        title="O nome deve ter no minimo 3 letras"
      />
      <input
        name="planet"
        value={form.planet}
        onChange={handleInput}
        type="text"
        required
        placeholder="Planeta"
        pattern={"[A-Z a-z]{3,}"}
        title="O nome deve ter no minimo 3 letras"
      />
      <input
        name="date"
        value={form.date}
        onChange={handleInput}
        type="text"
        required
        placeholder="date"
        pattern={"[A-Z a-z]{3,}"}
        title="O nome deve ter no minimo 3 letras"
      />
      <input
        name="description"
        value={form.description}
        onChange={handleInput}
        type="text"
        required
        placeholder="description"
        pattern={"[A-Z a-z]{3,}"}
        title="O nome deve ter no minimo 3 letras"
      />
      <input
        name="durationInDays"
        value={form.durationInDays}
        onChange={handleInput}
        type="Number"
        required
        placeholder="durationInDays"
        pattern={"[A-Z a-z]{3,}"}
        title="O nome deve ter no minimo 3 letras"
      />
    </form>
  );
};
export default CreateTripPage;
