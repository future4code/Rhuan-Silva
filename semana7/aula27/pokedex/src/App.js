import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export class App extends React.Component {
  state = {
    pokeList: [],
    pokeImage: ""
  };

  componentDidMount = () => {
    this.pegaPokemons();}
  //   this.onChangePokeName();
  // };

  pegaPokemons = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      );

      this.setState({ pokeList: response.data.results });
    } catch (err) {
      console.log(err.message);
    }
  };

  onChangePokeName = () => {
    

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(response => {
        this.setState({ pokeImage: response.data.sprites.front_default });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    const teste = this.state.pokeList.map((pokemon)=>{
      return pokemon.name
    });
    return (
      
      <Container>
        {/* <select onChange={this.onChangePokeName}>
          <option value={""} />
          {this.state.pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {" "}
                {pokemon.name}
              </option>
            );
          })}
        </select> */}
        {teste.join(',')}
        <div>
          {this.state.pokeImage && (
            <img src={this.state.pokeImage} alt="Pokemon" />
          )}
        </div>
      </Container>
    );
  }
}

export default App;
