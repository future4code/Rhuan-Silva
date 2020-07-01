import React from 'react';
import './App.css';
import Home from './components/Home.js'
import ListaRenderizada from './components/ListaRenderizada.js'



class App extends React.Component {
  state = {
    login: false
  };

  mudaTela = () => {
    this.setState({ login: !this.state.login });
    
  };

  render() {
    const Tela = this.state.login ? <Home /> : <ListaRenderizada />;
    
    return (
      <div><button onClick={this.mudaTela}>Ir para pagina de lista</button>
        <div>{Tela}</div>
        
      </div>
    )
  }
}

export default App;
