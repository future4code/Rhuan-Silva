import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'


const TelaPrincipal = styled.main`
display:flex;
align-items:center;
justify-content:center;
height:90vh;
width:100%;
`
const Cadastro = styled.div`
border:3px solid black;
display: flex;
flex-direction:column;
width:300px;
align-items:center;
justify-content:center;

`

class Home extends React.Component {
    state={
        nomeValue: '',
        emailValue: '',
    }
    criarUsuario = () =>{
        const body ={
            name:this.state.nomeValue,
            email:this.state.emailValue
        }
        Axios.post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',body,{headers: {
                Authorization:'Rhuan-Carlos-Turing'
            }})
            .then(response =>{
                console.log("Usuario Criado Com Sucesso!");
                
            }).catch(error=>{
                console.log(error.data);
                
            });
    };

    onChangeNomeValue = event => {
        this.setState({ nomeValue: event.target.value });
      };
    onChangeEmailValue = event => {
        this.setState({ emailValue: event.target.value });
      };

    render() {
        return (
            <TelaPrincipal>
                <Cadastro>
                <label>Nome</label>
                <input type="text" 
                value={this.state.nomeValue}
                onChange={this.onChangeNomeValue}/>                
                <label>Email</label>
                <input type="email"
                value={this.state.emailValue}
                onChange={this.onChangeEmailValue} />
                <button onClick={this.criarUsuario}>Salvar</button>
            </Cadastro>
            </TelaPrincipal>
        )
    }
}
export default Home;
