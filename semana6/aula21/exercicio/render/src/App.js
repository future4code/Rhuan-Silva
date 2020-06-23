import React from 'react';
import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import EtapaF from './components/EtapaF';


class App extends React.Component {
  state = {
    homePage: "Etapa1"
  };
  etapaDois = () => {
    this.setState({ homePage: "Etapa2" });
  };


  render() {
    const renderHomePage = () => {
      switch (this.state.homePage) {
        case "Etapa1":
          return <Etapa1/>;
        case "Etapa2":
          return <Etapa2 />;
        case "Etapa3":
          return <Etapa3 />;
        case "EtapaF":
          return<EtapaF/>;
        default:
          return <p>Seja bem vindo(a)</p>;
      }
    };
    return (
      <div>
        {renderHomePage()}
        <button onClick={this.etapaDois}>Proxima Etapa</button>
        </div>
    )
  }
}

export default App;
