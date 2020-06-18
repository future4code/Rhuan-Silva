import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
        nomeUsuario={'Joãosinho'}
        fotoUsuario={'https://picsum.photos/50/55'}
        fotoPost={'https://picsum.photos/201/150'}
        />
        <Post
        nomeUsuario={'Pedrinho'}
        fotoUsuario={'https://picsum.photos/50/56'}
        fotoPost={'https://picsum.photos/203/150'}
        />
      </div>
    );
  }
}

export default App;
