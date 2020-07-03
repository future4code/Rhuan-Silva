import React from 'react';
import styled from 'styled-components';
import CriarPlaylist from './components/CriarPlaylist'
import ListaPlaylists from './components/ListaPlaylists';

const Tudo = styled.main`
margin:0;
padding:0;`

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';

const baseAut = { headers: { Authorization: "Rhuan-Carlos-Turing" } };

class App extends React.Component {
  state = {
    login: false
  };

  mostrarPlaylist = () => {
    this.setState({ login: !this.state.login })
  }
  render() {
    const Tela = this.state.login?<CriarPlaylist/>:<ListaPlaylists/>
    return (
      <Tudo className="App">
        {Tela}

        <button onClick={this.mostrarPlaylist}>Exibir Playlist</button>


      </Tudo>
    );
  }
}

export default App;
