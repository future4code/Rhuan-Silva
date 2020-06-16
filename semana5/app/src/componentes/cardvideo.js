import React from 'react';


export function CardVideo(props) {
    const titulo = 'Titulo do video'
    function reproduzVideo() {
        alert('clicou')
    }
    return (
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.url} alt="" />
            <h4>{props.TituloVideo}</h4>
        </div>
    );
}