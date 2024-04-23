import { useState } from "react";
import './MaFiche.css'

interface GetDoctorantProps {
    showRechercher: boolean;
    setShowRechercher: React.Dispatch<React.SetStateAction<boolean>>;
    cinDoct : string ;
  }

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

  interface Revue {
    titre: string;
    listeAuteurs: string[];
    revue: string;
    datePublication: string;
    facteurImpact: string;
}

interface Communication {
  titre: string;
  listeAuteurs: string[];
  sujet: string;
  datePublication: string;
  domaineRecherche: string;
  conference: string;
  classeConference: string;
}

interface Chapitre {
  titreChapitre : String;
  listeAuteurs : String[];
  titreLivre : String;
  dateSortie : string;
  resumeChapitre : String;
  motsCles : String;
  }

const GetDoctorant : React.FC<GetDoctorantProps> = ({ showRechercher , setShowRechercher ,cinDoct} ) => {

    const [formData, setFormData] = useState<FormData | null>(null);
    const [revues, setRevues] = useState<Revue[]>([]);
    const [communications, setCommunications] = useState<Communication[]>([]);
    const [chapitres, setChapitres] = useState<Chapitre[]>([]);


      const fetchDataRevue = async () => {
        try {
            const response = await fetch(`http://localhost:8080/Article/cin/${cinDoct}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setRevues(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDataCommunication = async () => {
      try {
          const response = await fetch(`http://localhost:8080/Communication/cin/${cinDoct}`);
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          setCommunications(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  const fetchDataChapitre = async () => {
    try {
        const response = await fetch(`http://localhost:8080/Chapitre/cin/${cinDoct}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setChapitres(jsonData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


   

    
    const handleDataDoct = async () => {
        try {
          const response = await fetch(`http://localhost:8080/Doctorant/cin/${cinDoct}`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const jsonData: FormData = await response.json();

          jsonData.dateNaissance = new Date(jsonData.dateNaissance).toLocaleDateString();
          jsonData.dateInscription = new Date(jsonData.dateInscription).toLocaleDateString();

          setFormData(jsonData); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }

        fetchDataRevue();
        fetchDataCommunication();
        fetchDataChapitre();
      };

      const handleShowRechercherClick = () => {
        setShowRechercher(false);
      };

      handleDataDoct();

      const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString();
      };
    
    

    return (
        <div>

          {formData ? (
            <>
            <div className="page-container-doct-result">
              <div className="coordonnee-doctorant-container">
              <h3 className="upper-title">coordonnées du doctorant</h3>
              <div className="coordonnee-doctorant-container-low">
              <div>
                  <p><span className="bold-content">Nom : </span> {formData.nom}</p>
                  <p><span className="bold-content">Prénom :</span> {formData.preNom}</p>
                  <p><span className="bold-content">CIN : </span> {formData.cin}</p>
                  <p><span className="bold-content">Date de Naissance : </span> {formData.dateNaissance}</p>
                  <p><span className="bold-content">Date d'Inscription : </span>{formData.dateInscription}</p>
                </div>
                <div>
                  <p><span className="bold-content">Genre : </span>{formData.genre}</p>
                  <p><span className="bold-content">Lieu de Naissance : </span>{formData.lieuNaissance}</p>
                  <p><span className="bold-content">Adresse Mail : </span>{formData.adresseMail}</p>
                  <p><span className="bold-content">Numéro de Téléphone : </span>{formData.numTelephone}</p>
                </div>
              </div>
              </div>
              
              <>
              <h2 className="upper-title-2">Article de revue :</h2>
              {revues.length > 0 ? (
                <div>
                    {revues.map((revue, index) => (
                        <div key={index} className="revue-item">
                            <h3 className="upper-title" >{revue.titre}</h3>
                            <p><span className="bold-content">Liste des auteurs : </span>{revue.listeAuteurs.join(', ')}</p>
                            <p><span className="bold-content">Revue : </span>{revue.revue}</p>
                            <p><span className="bold-content">Date de Publication : </span>{formatDate(revue.datePublication)}</p>
                            <p><span className="bold-content">Facteur d'Impact : </span>{revue.facteurImpact}</p>
                        </div>
                    ))}
                </div>):( <p></p> )}
              </>

              <>
              <h2 className="upper-title-2">Coomunication nationale / internationale :</h2>
              {communications.length > 0 ? (
                <div>
                    {communications.map((communication, index) => (
                        <div key={index} className="revue-item">
                            <h3 className="upper-title" >{communication.titre}</h3>
                            <p><span className="bold-content">Liste des auteurs : </span>{communication.listeAuteurs.join(', ')}</p>
                            <p><span className="bold-content">Sujet : </span>{communication.sujet}</p>
                            <p><span className="bold-content">Date de Publication : </span>{formatDate(communication.datePublication)}</p>
                            <p><span className="bold-content">Domaine de recherche : </span>{communication.domaineRecherche}</p>
                            <p><span className="bold-content">Conference : </span>{communication.conference}</p>
                            <p><span className="bold-content">Classe de Conference : </span>{communication.classeConference}</p>
                        </div>
                    ))}
                </div>):( <p></p> )}
              </>
            
              <>
              <h2 className="upper-title-2">Chapitre de livre :</h2>
              {chapitres.length > 0 ? (
                <div>
                    {chapitres.map((chapitre, index) => (
                        <div key={index} className="revue-item">
                            <h3 className="upper-title" >{chapitre.titreChapitre}</h3>
                            <p><span className="bold-content">Liste des auteurs : </span>{chapitre.listeAuteurs.join(', ')}</p>
                            <p><span className="bold-content">Titre de livre : </span>{chapitre.titreLivre}</p>
                            <p><span className="bold-content">Date de Sortie : </span>{formatDate(chapitre.dateSortie)}</p>
                            <p><span className="bold-content">Resumee du chapitre : </span>{chapitre.resumeChapitre}</p>
                            <p><span className="bold-content">Mots clés : </span>{chapitre.motsCles}</p>
                        </div>
                    ))}
                </div>):( <p></p> ) }
              </>
            </div>
            
            <button className="acceuil-button" onClick={handleShowRechercherClick}>Acceuil</button>
            </>
          ) : ( <p></p>  )}
          
        </div>
      );
    }; 

export default GetDoctorant ;