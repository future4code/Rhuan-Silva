// {/* <select onChange={this.onChangePokeName}>
//           <option value={""} />
//           {this.state.pokeList.map(pokemon => {
//             return (
//               <option key={pokemon.name} value={pokemon.name}>
//                 {" "}
//                 {pokemon.name}
//               </option>
//             );
//           })}
//         </select>
//         <div>
//           {this.state.pokeImage && (
//             <img src={this.state.pokeImage} alt="Pokemon" />
//           )}
//         </div> */}

//         const Container = styled.div`
//   font-family: sans-serif;
//   text-align: center;
// `;

// export class App extends React.Component {
//   state = {
//     pokeList: [],
//     pokeImage: []
//   };

//   componentDidMount = () => {
//     this.listPokemon();
//   };

//   pegaPokemons = async () => {
//     try {
//       const response = await axios.get(
//         "https://pokeapi.co/api/v2/pokemon/?limit=900"
//       );

//       this.setState({ pokeList: response.data.results });
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   listPokemon = () => {
//     // const pokeName = event.target.value;

//     axios.get('https://pokeapi.co/api/v2/pokemon/?limit=900')
//       .then(response => {
//         this.setState({ pokeImage: response.data.sprites.front_default });
//       })
//       .catch(err => {
//         console.log(err.message);
//       });
//   };

//   render() {
//     return (
//       <Container>
//         <span>
//           {this.state.pokeImage.map(pokemon => {
//             return (
//               <img src={this.state.pokeImage} alt='pokemon' />
//             )
//           })}
//         </span>
//       </Container>
//     );
//   }
// }
