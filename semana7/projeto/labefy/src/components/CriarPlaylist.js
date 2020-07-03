import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Tudo = styled.main`
margin:0;
padding:0;`

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';

const baseAut = {headers: {Authorization: "Rhuan-Carlos-Turing"}}

class App extends React.Component {
  state={
    nomePlaylist:''
  };

criaPlaylist=()=>{
  const body = {
    name: this.state.nomePlaylist
  }

  axios.post(
    baseUrl,body,baseAut
  ).then(response=>{
    window.alert('Playlist criada com sucesso');    
  }).catch(err=>{
    if(err.message==='Request failed with status code 400')
    alert('Playlist repetida')
  })
}

onChangeNamePlaylist = e =>{
  this.setState ({nomePlaylist: e.target.value})
}

  render(){
  return (
    <Tudo className="App">
      <input
      value={this.state.nomePlaylist}
      onChange={this.onChangeNamePlaylist}
      placeholder={'Nome da playlist'}
      />
      <button onClick={this.criaPlaylist}>Criar</button>
      
    </Tudo>
  );}
}

export default App;
