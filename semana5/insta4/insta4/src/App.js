import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = {
    postagens: [
      { nomeUsuario: 'Paulinha', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150' },
      { nomeUsuario: 'Joãosinho', fotoUsuario: 'https://picsum.photos/50/55', fotoPost: 'https://picsum.photos/201/150' },
      { nomeUsuario: 'Pedrinho', fotoUsuario: 'https://picsum.photos/50/56', fotoPost: 'https://picsum.photos/203/150' }
    ]
  }


  render() {
    const listaRenderizada = this.state.postagens.map(post => {
      return (
        <div className={'app-container'}>
          <Post
            key={post.nomeUsuario}
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
          />
        </div>
      )
      )
    }
  }
}

export default App;
