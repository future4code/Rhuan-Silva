import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardVideo } from './componentes/cardvideo';
import { Topico } from './componentes/topicos';

function App() {
  return (
    <div className="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <Topico TituloDoTopico={'Inicio'} />
                    <Topico TituloDoTopico={'Em alta'} />
                    <Topico TituloDoTopico={'Inscrições'} />
                    <Topico TituloDoTopico={'Originais'} />
                    <hr/>
                    <Topico TituloDoTopico={'Biblioteca'} />
                    <Topico TituloDoTopico={'Histórico'} />                    
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <CardVideo 
                url={'https://picsum.photos/400/400?a=1'}
                TituloVideo={'Titulo1'} />          
                <CardVideo 
                url={'https://picsum.photos/400/400?a=2'}
                TituloVideo={'Titulo2'} />          
                <CardVideo 
                url={'https://picsum.photos/400/400?a=3'}
                TituloVideo={'Titulo3'} />          
                <CardVideo 
                url={'https://picsum.photos/400/400?a=4'}
                TituloVideo={'Titulo4'} 
                />          
                <CardVideo 
                url={'https://picsum.photos/400/400?a=5'}
                TituloVideo={'Titulo5'} />          
                <CardVideo 
                url={'https://picsum.photos/400/400?a=6'}
                TituloVideo={'Titulo6'} />          
                <CardVideo 
                url={'https://picsum.photos/400/400?a=7'}
                TituloVideo={'Titulo7'} />          
                <CardVideo 
                url={'https://picsum.photos/400/400?a=8'}
                TituloVideo={'Titulo8'} />          
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
  );
}

export default App;
