import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: '', 
        texto: '',
        completa: false 
      }],
      inputValue: '',
      filter: ''
    }

  componentDidUpdate() {
    const tarefa = {
      tarefas: this.state.tarefas,
      inputValue: this.state.inputValue,
      filter: this.state.filter
    };

    localStorage.setItem('tarefa', JSON.stringify(tarefa))

  };

  componentDidMount() {
    const tarefaString = localStorage.getItem("tarefa");

    const tarefaObjeto = JSON.parse(tarefaString);
    console.log(tarefaObjeto);

  };

  onChangeInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  criaTarefa = () => {
    const tar = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    };

  }

  selectTarefa = (id) => {

  }

  onChangeFilter = (event) => {

  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
