import InputArea from './InputAre';
import './CommScien.css'
import { useState } from 'react';


interface CommProps {
  cinDoct: string;
}

const CommScien : React.FC<CommProps> = ({cinDoct}) => {

  const [titre, setTitre] = useState('');
  const [listeAuteurs, setListeAuteurs] = useState<string[]>(['']);
  const [sujet, setSujet] = useState('');
  const [datePublication, setDatePublication] = useState('');
  const [conference, setConference] = useState('');
  const [classeConference, setClasseConference] = useState('');
  const [domaineRecherche, setDomaineRecherche] = useState('');

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleSubmit = async () => {
    try {

      const requestBody = {
        titre : titre,
        listeAuteurs : listeAuteurs,
        sujet : sujet,
        datePublication :datePublication,
        domaineRecherche : domaineRecherche,
        conference : conference,
        classeConference : classeConference,
        doctorant : {
          cin : cinDoct
        }
      };

      const response = await fetch('http://localhost:8080/Communication/save', {
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
        <h1>Communication internationale/nationale</h1>
        <label htmlFor="name">Titre :</label>
        <input type="text" placeholder="titre.." value={titre} onChange={(e) => setTitre(e.target.value)} />
  
        <InputArea inputList={listeAuteurs} setInputList={setListeAuteurs}/>
        <label htmlFor="name">Conference :</label>
        <input type="text" placeholder="titre.." value={conference} onChange={(e) => setConference(e.target.value)} />
        <label htmlFor="classe-conf">Classe de conference :</label>
          <select name="classe-conference" value={classeConference} onChange={(e) => setClasseConference(e.target.value)}>
            <option value="Classe-A">Classe A</option>
            <option value="Classe-B">Classe B</option>
            <option value="Classe-C">Classe C</option>
            <option value="Non-Classé">Non Classé</option>
          </select>

        <div className='date-container'>
        <label htmlFor="Date">Date de publication :</label>
        <input type="Date" value={datePublication} onChange={(e) => setDatePublication(e.target.value)}/>
        </div>
        <button onClick={handleSubmit} disabled={buttonClicked} className={buttonClicked ? 'disabled-button' : 'enabled-button'} >Submit</button>
      </div>
    );
  };
  
  export default CommScien;
  
