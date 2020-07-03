import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'

const Lista = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Item = styled.p`
border-bottom: 1px solid #000;
width: 50%;
margin:8px;
display:flex;
justify-content:space-between;

`
class ListaRenderizada extends React.Component {
    state = {
        user: []
    };

    componentDidMount = () => {
        this.pegarUsuarios();
    };

    pegarUsuarios = () => {
        Axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', { headers: { Authorization: 'Rhuan-Carlos-Turing' } 
        }).then(response => {
            this.setState({ user: response.data })
            ;
        }).catch(error => {
                console.log(error.data);
            });
    };
    render() {
        return (
            <Lista>
                <h1>Usuários Cadastrados</h1>
                {this.state.user.map(usuarios => {
                    return <Item>{usuarios.name}
                    <button>Deletar</button>
                    </Item>
                })}
            </Lista>

        )
    }
}
export default ListaRenderizada;