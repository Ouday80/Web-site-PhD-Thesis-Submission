import InputArea from './InputAre';
import './ChapLivre.css'
import { useState } from 'react';

interface ChapitreProps {
  cinDoct: string;
}

const ChapLivre : React.FC<ChapitreProps> = ({cinDoct})  => {

  const [titreChapitre, setTitreChapitre] = useState('');
  const [titreLivre, setTitreLivre] = useState('');
  const [listeAuteurs, setListeAuteurs] = useState<string[]>(['']);
  const [dateSortie, setDateSortie] = useState('');
  const [resumeChapitre, setResumeChapitre] = useState('');
  const [motsCles, setMotsCles] = useState('');

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleSubmit = async () => {
    try {

      const requestBody = {
        titreChapitre : titreChapitre,
        listeAuteurs : listeAuteurs,
        titreLivre : titreLivre,
        dateSortie : dateSortie,
        resumeChapitre : resumeChapitre,
        motsCles : motsCles,
        doctorant : {
          cin : cinDoct
        }
      };

      const response = await fetch('http://localhost:8080/Chapitre/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        console.log('Data submitted successfully');
        setButtonClicked(true);
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

    return (
      <div className='article-container'>
        <div>
        <h1>Chapitre de livre</h1>
        <label htmlFor="name">Titre de chapitre:</label>
        <input type="text" placeholder="titre.." value={titreChapitre} onChange={(e) => setTitreChapitre(e.target.value)} />
        
        <InputArea inputList={listeAuteurs} setInputList={setListeAuteurs}/>
        <label htmlFor="Sujet">resumé du chapitre :</label>
        <textarea className='Sujet-input' rows={4} cols={60} placeholder='ecrire ici ...' value={resumeChapitre} onChange={(e) => setResumeChapitre(e.target.value)}></textarea>
        <label htmlFor="Sujet">mots clés <span style={{color: '#ccc'}}>séparer vos mots avec des (-)</span> :</label>
        <textarea className='Sujet-input' rows={4} cols={60} placeholder='ecrire ici ...' value={motsCles} onChange={(e) => setMotsCles(e.target.value)}></textarea>

        <label htmlFor="titre-livre">Titre de livre:</label>
        <input type="text" placeholder="titre.." value={titreLivre} onChange={(e) => setTitreLivre(e.target.value)} />
        <label htmlFor="Date" >Date de Sortie :</label>
        <input type="Date"  value={dateSortie} onChange={(e) => setDateSortie(e.target.value)} />
        </div>
        
        <button onClick={handleSubmit} disabled={buttonClicked} className={buttonClicked ? 'disabled-button' : 'enabled-button'} >Submit</button>
      </div>
    );
  };
  
  export default ChapLivre;
  
