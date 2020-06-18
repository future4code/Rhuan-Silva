import React from 'react'
import './CardPequeno.css'

export const CardPequeno = (props) => {
    return (
        <div className="smallcard-container">
            <img src={props.imagem} />
            <div>
                <h4>{props.email}</h4>
                <h4>{props.endereco}</h4>
            </div>
        </div>
        
    )
}