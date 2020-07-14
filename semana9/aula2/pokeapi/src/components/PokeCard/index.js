import React, {useState , useEffect} from 'react';
import axios from "axios";


export default function PokeCard(props){
    const [pokemon,setPokemon] = useState({})

    const pegaPokemon = pokeName => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
          .then(response => {
            // guarda as infos do pokemon no estado
            setPokemon(response.data );
          })
          .catch(err => {
            console.log(err);
          });
      };
  
    // método que roda após a montagem do componente
    useEffect(()=>{
        pegaPokemon()
    },{})

    useEffect(()=>{
        pegaPokemon(props.pokeName)
    },[props.pokeName])


    // método que roda após a atualização do componente.
    // Um dos casos de atualização do componente é a
    // mudança da props que está sendo passado pra ele
    // componentDidUpdate(prevProps) {
    //   // aqui, é feita uma verificação da props anterior com a props atual.
    //   // Caso a props anterior seja diferente da props atual,
    //   // a função pegaPokemon é chamada.
    //   if (prevProps.pokemon !== this.props.pokemon) {
    //     this.pegaPokemon(this.props.pokemon);
    //   }
    // }
  
    // função que bate na poke API com um nome específico de pokemon
    // Isso permite que consigamos pegar as infos dos pokemons.
    // Nos métodos de ciclo de vida, ela é chamada passando como
    // parâmetro o nome de pokemon que está chegando como props.
    
  
    //  
    //   const pokemon = this.state.pokemon;
  
      return (
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.weight} Kg</p>
          {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
          {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          )}
        </div>
      );
    }
  
  
