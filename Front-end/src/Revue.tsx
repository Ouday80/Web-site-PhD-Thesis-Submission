import { useState } from 'react';
import InputArea from './InputAre';
import './Revue.css'


interface RevueProps {
  cinDoct: string;
}

const Revue: React.FC<RevueProps> = ( {cinDoct}) => {

  const [titre, setTitre] = useState('');
  const [listeAuteurs, setListeAuteurs] = useState<string[]>(['']);
  const [Revue, setRevue] = useState('');
  const [datePublication, setDatePublication] = useState('');
  const [facteurImpact, setFacteurImpact] = useState('');

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleSubmit = async () => {
    try {

      const requestBody = {
        titre : titre,
        listeAuteurs : listeAuteurs,
        revue : Revue,
        datePublication :datePublication,
        facteurImpact : facteurImpact,
        doctorant : {
          cin : cinDoct
        }
      };

      const response = await fetch('http://localhost:8080/Article/save', {
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
      <h1>Articel de revue</h1>
      <label htmlFor="name" >Titre :</label>
      <input type="text" placeholder="titre.."  value={titre} onChange={(e) => setTitre(e.target.value)} />
      
      <InputArea inputList={listeAuteurs} setInputList={setListeAuteurs} />
      <label htmlFor="Revue">Revue :</label>
      <textarea className='Revue-input' rows={4} cols={60} placeholder='ecrire ici ...'  value={Revue} onChange={(e) => setRevue(e.target.value)}></textarea>
      <label htmlFor="Date" className='Date'>Date de publication :</label>
      <input type="Date" value={datePublication} onChange={(e) => setDatePublication(e.target.value)} />

      <div className='select-area-container'>
      <div className='select-area'>
      <div className='select-area-2'>
      <label htmlFor="option2">revue non indexée</label>
      <input type="radio" id="option2" name="options" value="revue non indexée" onChange={(e) => setFacteurImpact(e.target.value)} />
      </div>
      <div className='select-area-1'>
      <label htmlFor="option1">revue avec facteur d'impact</label>
      <input type="radio" id="option1" name="options" value="revue avec facteur d'impact" onChange={(e) => setFacteurImpact(e.target.value)} />
      </div>
      </div>
      <div>Pour plus d'inforamtions consulter ce site :<a href="https://mjl.clarivate.com/search-results">WOS</a></div>
      </div>
      <button onClick={handleSubmit} disabled={buttonClicked} className={buttonClicked ? 'disabled-button' : 'enabled-button'}>Submit</button>
    </div>
  );
};

export default Revue ;
