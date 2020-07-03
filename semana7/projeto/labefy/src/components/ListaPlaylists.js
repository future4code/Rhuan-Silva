import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';

const baseAut = { headers: { Authorization: "Rhuan-Carlos-Turing" } };

const Lista = styled.div`
display:flex;
justify-content:space-between;
`

const Container = styled.main`
margin:0 auto;
padding:0;
width:60%;
height:80vh;
display:flex;
flex-flow: column wrap;
justify-content:center;
align-items:center;
`


class ListaPlaylists extends React.Component {
    state = {
        ListaPlaylist: []
    }
    componentDidMount = () => {
        this.pegaPlaylist()
    }
    pegaPlaylist = () => {
        axios.get(baseUrl, baseAut).then(response => {
            this.setState({ ListaPlaylist: response.data.result.list });

        }).catch(err => {
            console.log(err.message);

        })
    }
    deletaPlaylist = (userId) => {
        axios.delete(`${baseUrl}/${userId}`, baseAut).then(() => {
            this.pegaPlaylist();
        }).catch(err => {
            console.log(err.message);
        })
    }

    mostraPlaylist = (userId) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:${userId}/tracks
        `, baseAut)
        .then(() => {
            this.pegaPlaylist();
        }).catch(err => {
            console.log(err.message);
        })
    }

    render() {
        return (
            <Container>
                {this.state.ListaPlaylist.map(playlist => {
                    return <Lista key={playlist.id} onClick={() => {this.mostraPlaylist(playlist.id)}}>
                        {playlist.name}
                        <button onClick={() => { this.deletaPlaylist(playlist.id) }}>Deletar</button>
                    </Lista>

                })}
            </Container>
        )
    }
}
export default ListaPlaylists;