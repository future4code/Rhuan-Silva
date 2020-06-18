import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import { CardPequeno } from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem='https://scontent.fvix1-1.fna.fbcdn.net/v/t1.0-9/p720x720/69333095_2901562603247993_3246067592904835072_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_eui2=AeGFM2WMNCNLNVAAQZWuu5XDqR_d3vZaWpepH93e9lpal5Qt4-DrjJcwnBZ4E9eoNt_hl7--a5_-gRqZcW7JwIbr&_nc_oc=AQlzhhqES7u5FM4otMyEkBOh7047H8-SzuSVPq4Oicctp1n5uWMWj3GQDLvkuidK1-k&_nc_ht=scontent.fvix1-1.fna&_nc_tp=6&oh=8f3ec948ada3eafc891c03b9f180ba52&oe=5F0DC578'
          nome="Rhuan Carlos" 
          descricao="Oi, eu sou o Rhuan. Sou Aluno da Labenu. Adoro pedir aplicar minhas idéias e criar coisas novas que me façam aprender algo diferente."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno
      imagem='https://png.pngtree.com/png-clipart/20191120/original/pngtree-email-icon-png-image_5065641.jpg'
      email={'RhuanCarlos@gmail.com'}
      />
      <CardPequeno
      imagem='https://static.vecteezy.com/system/resources/previews/000/573/624/non_2x/map-pointer-gps-icon-vector.jpg'
      endereco={'Rua Amalia,25'}
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0c8d3b34bcc0f12f3ddc_avatar_labenu_branco.png" 
          nome="Labenu" 
          descricao="Web Full Stack Developer Student" 
        />
        
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Sipolatti" 
          descricao="Expedidor" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
