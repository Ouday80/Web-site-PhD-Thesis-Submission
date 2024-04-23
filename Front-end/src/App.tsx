import './App.css'
import PostDoctorant from './PostDoctorant';
import RenderComponent from './RenderComponent';
import imageDipolmee from './images/feteing-scaled.jpg'
import logoEnit from './images/logo-enit.png'
import logoDoct from './images/books-with-graduation-cap-digital-art-style-education-day.png'
import React, { ChangeEvent, useState } from 'react';
import MaFiche from './MaFiche';
import Rechercher from './Rechercher';



function App() {

  const [showNewContent, setShowNewContent] = useState(false);
  const handleSoumettreClick = () => {
    setShowNewContent(true);
  };

  const handleBackToTopClick = () => {
    setShowNewContent(false);
  };

  return(
    <>
      {showNewContent ? (
        <NewContent handleBackToTopClick={handleBackToTopClick} />
      ) : (
        <OriginalContent handleSoumettreClick={handleSoumettreClick} />
      )}
    </>
  );
}


function OriginalContent({ handleSoumettreClick }: { handleSoumettreClick: () => void }) {

  const [showMaFiche, setShowMaFiche] = useState(false);
  
  const handleMaFiche = ( ) => {
    setShowMaFiche(true);
  }

  const [showRechercher, setShowRechercher] = useState(false);
  
  const handleRechercher = ( ) => {
    setShowRechercher(true);
  }


  return (
    <>
    { showRechercher ? ( < Rechercher showRechercher={showRechercher} setShowRechercher={setShowRechercher} />): (
    <>
    { showMaFiche ? ( < MaFiche showMaFiche={showMaFiche} setShowMaFiche={setShowMaFiche} />): (
    <>
    <div className="page-container">
      <div className="main-container">
        <div className="image-container">
          <img src={imageDipolmee} className="image-diplomee" />
          <div className="left-overlay"></div>
        </div>

        <div className="logo-enit-container">
          <img src={logoEnit} className="logo-enit" />
        </div>
      </div>

      <div className="paragraph-container">
        <p>
          <span className="font1">Thèse</span>
          <span className="font2">De</span>
          <span className="font3">Doctorat</span>
        </p>
      </div>
      <div className="buttons-container">
        <button id="scroll-btn-soumettre" className="neon-button" onClick={handleSoumettreClick}>Soumettre</button>
        <button id="scroll-btn-soumettre" className="neon-button" onClick={handleMaFiche} >Ma fiche </button>
        <button id="scroll-btn-rechercher" className="neon-button hover-button" disabled={true}>Guide</button>
      </div>
    </div>
    <div className='lower-div'>
      <div>
        <img src={logoDoct} style={{width : '100%'}} />
      </div>
      <div className='lower-paragraph-container'>
        <p>Ce site est une première expérience d’une plateforme de soumission des thèses de doctorat en Tunisie, il permet à la communauté scientifique tunisienne d'avoir une connaissance sur l'état de la recherche doctorale en Tunisie. </p>
        <p>Il permet, dans un premier temps, l’accès en ligne à tous les sujets de thèses en cours de préparation en Tunisie avec la possibilité éventuelle de contact avec les personnes et organismes qui ont un lien avec ces thèses.</p>
        <p>Les informations de cette base de données sont saisies par le doctorant et son encadrant.</p>
      </div>
    </div>
    
    </>)}
    </>)}
    </>
  );
}

function NewContent({ handleBackToTopClick }: { handleBackToTopClick: () => void }) {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Function to handle input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<number>>) => {
    const value = parseInt(event.target.value, 10); // Parse input value as integer
    setter(value); // Update corresponding count state
    console.log(value);
  };

  const [postDoct, setPostDoct] = useState(false);

  const setValueForOneSecond = (value: boolean, setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(true); // Set the value to true
    setTimeout(() => {
      setter(false); // Set the value to false after 1 second
    }, 500);
  };

  const [showComponents, setShowComponents] = useState(false);

  const handleClickCompShow = () => {
    setShowComponents(true);
    setValueForOneSecond(true,setPostDoct);
   
  };

  interface FormData {
    nom: string;
    preNom: string;
    cin: string;
    dateNaissance: string; 
    dateInscription: string; 
    genre: string;
    lieuNaissance: string;
    adresseMail: string;
    numTelephone: string;
}
  

  const [formData, setFormData] = useState<FormData>({
    nom: '',
    preNom: '',
    cin: '',
    lieuNaissance: '',
    genre: '',
    adresseMail: '',
    numTelephone: '' ,
    dateNaissance: '',
    dateInscription: ''
  });


  return (
    <div
      id="new-content-soumettre"
      className={'new-content-soumettre fade-in'}
    >
      <h1 className='phrase-ouverture'>
        Le doctorant est appelé à remplir
        attentivement le formulaire ci-dessous:
      </h1>
      <div className="Soumettre-content">
        <div className="container-soumettre-left">
          <label htmlFor="fname">Nom:*</label>
          <input 
            type="text" 
            placeholder="votre Nom.."  
            value={formData.nom} 
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          />

          <label htmlFor="lname">Prenom:*</label>
          <input type="text" placeholder="votre Prenom.." value={formData.preNom} onChange={(e) => setFormData({ ...formData, preNom: e.target.value })} />

          <label htmlFor="Cin">CIN N°(ou PASSEPORT):*</label>
          <input type="text" placeholder="Cin /.." value={formData.cin} onChange={(e) => setFormData({ ...formData, cin: e.target.value })} />
          
        </div>

        <div className="container-soumettre-right">
        
          <div className='upper-belt'>
          <div>
            <label htmlFor="fname">Lieu de Naissance:</label>
                <select id="tunisiaStates" value={formData.lieuNaissance} onChange={(e) => setFormData({ ...formData, lieuNaissance: e.target.value })}>
                <option value="Tunis">Tunis</option>
                <option value="Ariana">Ariana</option>
                <option value="Ben Arous">Ben Arous</option>
                <option value="Manouba">Manouba</option>
                <option value="Nabeul">Nabeul</option>
                <option value="Zaghouan">Zaghouan</option>
                <option value="Bizerte">Bizerte</option>
                <option value="Béja">Béja</option>
                <option value="Jendouba">Jendouba</option>
                <option value="Le Kef">Le Kef</option>
                <option value="Siliana">Siliana</option>
                <option value="Sousse">Sousse</option>
                <option value="Monastir">Monastir</option>
                <option value="Mahdia">Mahdia</option>
                <option value="Sfax">Sfax</option>
                <option value="Kairouan">Kairouan</option>
                <option value="Kasserine">Kasserine</option>
                <option value="Sidi Bouzid">Sidi Bouzid</option>
                <option value="Gabès">Gabès</option>
                <option value="Medenine">Medenine</option>
                <option value="Tataouine">Tataouine</option>
                <option value="Tozeur">Tozeur</option>
                <option value="Kebili">Kebili</option>
                <option value="Gafsa">Gafsa</option>
              </select>
          </div>
          <div>
              <label htmlFor="Genre">Genre:</label>
              <select id="Genre" className="Genre" value={formData.genre} onChange={(e) => setFormData({ ...formData, genre: e.target.value })}>
                <option value="Masculin">Masculin</option>
                <option value="Féminin">Féminin</option>
              </select>
          </div>
          </div>

          <label htmlFor="lname">Adresse Mail:</label>
          <input type="email" placeholder="Adresse Mail.." value={formData.adresseMail} onChange={(e) => setFormData({ ...formData, adresseMail: e.target.value })} />

          <label htmlFor="phone">N° Tel:*</label>
          <input type="tel" placeholder="N° Tel.." value={formData.numTelephone} onChange={(e) => setFormData({ ...formData, numTelephone: e.target.value })} />

        </div>
        <div className='belt-area-container'>

          <div className='belt-area-container-1'>
            <div><label htmlFor="birthday">Date de Naissance:*</label></div>
            <div><input type="date" name="birthday" value={formData.dateNaissance} onChange={(e) => setFormData({ ...formData, dateNaissance: e.target.value })} /></div>
          </div>
          <div className='belt-area-container-2'>
            <div><label htmlFor="birthday">Date de première inscription:*</label></div>
            <div><input type="date" name="birthday" value={formData.dateInscription} onChange={(e) => setFormData({ ...formData, dateInscription: e.target.value })}/></div>
          </div>

        </div>
      </div>
      <h2>Publications Scientifiques:</h2>

      <label htmlFor="PubSc">Article de Revue:*</label>
      <input type="number" placeholder="0" min="0" value={count1} onChange={((e) => handleChange(e, setCount1))} />

      <label htmlFor="PubSc">Communication Scientifique:*</label>
      <input type="number" placeholder="0" min="0" value={count2} onChange={(e) => handleChange(e, setCount2)} />

      <label htmlFor="PubSc">Chapitre de livre:*</label>
      <input type="number" placeholder="0" min="0" value={count3} onChange={(e) => handleChange(e, setCount3)}/>

      <h3>les champs contenant (*) sont obligatoires</h3>

      <button className="soumettre-button-0" onClick={handleClickCompShow} >Valider</button>
      
      <button className="back-button" id="scroll-top-btn-soumettre" onClick={handleBackToTopClick}>
        Acceuil
      </button>
      {postDoct && <PostDoctorant formData={formData} />}
      {showComponents && <RenderComponent count1={count1} count2={count2} count3={count3} cinDoct={formData.cin} />}
    </div>

  );
}
export default App

