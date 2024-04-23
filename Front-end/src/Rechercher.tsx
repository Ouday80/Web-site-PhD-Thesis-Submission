import { useEffect, useState } from "react";
import './MaFiche.css'
import GetDoctorant from "./GetDoctorant";

interface RechercherProps {
    showRechercher: boolean;
    setShowRechercher: React.Dispatch<React.SetStateAction<boolean>>;
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

const Rechercher : React.FC<RechercherProps> = ({ showRechercher, setShowRechercher } ) => {

    const [titre, setTitre] = useState('');
    const [revues, setRevues] = useState<Revue[]>([]);
    const [communications, setCommunications] = useState<Communication[]>([]);
    const [chapitres, setChapitres] = useState<Chapitre[]>([]);
    const [nom , setNom] = useState('');
    const [prenom , setPrenom] = useState('');
    const [formDatas , setFormDatas] = useState<FormData[]>([]);

    const handleShowRechercherClick = () => {
        setShowRechercher(false);
      };

      const fetchDataRevue = async () => {
        try {
            const response = await fetch(`http://localhost:8080/Article/${titre}`);
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
          const response = await fetch(`http://localhost:8080/Communication/${titre}`);
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
        const response = await fetch(`http://localhost:8080/Chapitre/${titre}`);
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
        
        fetchDataRevue();
        fetchDataCommunication();
        fetchDataChapitre();
      };
    
    const handleDataDoctNomPrenom = async () => {
        try {
          const response = await fetch(`http://localhost:8080/Doctorant/nom/${nom}/${prenom}`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();

          jsonData.dateNaissance = new Date(jsonData.dateNaissance).toLocaleDateString();
          jsonData.dateInscription = new Date(jsonData.dateInscription).toLocaleDateString();

          setFormDatas(jsonData); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }

      };

      const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString();
      };
    
    

    return (
        <div>
          
          { formDatas.length >0 ? ( <div>
            {formDatas.map((formData , index) => (
              <div key={index} >
              { < GetDoctorant showRechercher={showRechercher} setShowRechercher={setShowRechercher} cinDoct={formData.cin} /> }

              </div>
            ))}
          </div> ) :

          (<>
            {(revues.length >0 || communications.length>0 || chapitres.length > 0) ? (
            <>
            <div className="page-container-doct-result">
              <>
              
              {revues.length > 0 ? (
                <div>
                    <h2 className="upper-title-2">Article de revue :</h2>
                    {revues.map((revue, index) => (
                        <div key={index} className="revue-item">
                            <h3 className="upper-title" >{revue.titre}</h3>
                            <p><span className="bold-content">Liste des auteurs : </span>{revue.listeAuteurs.join(', ')}</p>
                            <p><span className="bold-content">Revue : </span>{revue.revue}</p>
                            <p><span className="bold-content">Date de Publication : </span>{ formatDate(revue.datePublication) }</p>
                            <p><span className="bold-content">Facteur d'Impact : </span>{revue.facteurImpact}</p>
                        </div>
                    ))}
                </div>):( <p></p> )}
              </>

              <>
              
              {communications.length > 0 ? (
                <div>
                    <h2 className="upper-title-2">Coomunication nationale / internationale :</h2>
                    {communications.map((communication, index) => (
                        <div key={index} className="revue-item">
                            <h3 className="upper-title" >{communication.titre}</h3>
                            <p><span className="bold-content">Liste des auteurs : </span>{communication.listeAuteurs.join(', ')}</p>
                            <p><span className="bold-content">Sujet : </span>{communication.sujet}</p>
                            <p><span className="bold-content">Date de Publication : </span>{ formatDate(communication.datePublication) }</p>
                            <p><span className="bold-content">Domaine de recherche : </span>{communication.domaineRecherche}</p>
                            <p><span className="bold-content">Conference : </span>{communication.conference}</p>
                            <p><span className="bold-content">Classe de Conference : </span>{communication.classeConference}</p>
                        </div>
                    ))}
                </div>):( <p></p> )}
              </>
            
              <>
              
              {chapitres.length > 0 ? (
                <div>
                    <h2 className="upper-title-2">Chapitre de livre :</h2>
                    {chapitres.map((chapitre, index) => (
                        <div key={index} className="revue-item">
                            <h3 className="upper-title" >{chapitre.titreChapitre}</h3>
                            <p><span className="bold-content">Liste des auteurs : </span>{chapitre.listeAuteurs.join(', ')}</p>
                            <p><span className="bold-content">Titre de livre : </span>{chapitre.titreLivre}</p>
                            <p><span className="bold-content">Date de Sortie : </span>{ formatDate(chapitre.dateSortie) }</p>
                            <p><span className="bold-content">Resumee du chapitre : </span>{chapitre.resumeChapitre}</p>
                            <p><span className="bold-content">Mots clés : </span>{chapitre.motsCles}</p>
                        </div>
                    ))}
                </div>):( <p></p> )}
              </>
            </div>
            <button className="acceuil-button" onClick={handleShowRechercherClick}>Acceuil</button>
            </>
          ) : (
            <div>
                <h1 className="h1-style">cherchez un Doctorant , un  article de revue , une communication nationale ou internationale ou bien un chapitre de livre.</h1>

                <div className="search-box">
                    <div><h2>Chercher avec le nom et le prenom</h2></div>
                    <div className="search-box-Up">
                        <div className="search-box-low-1"><label htmlFor="">Nom :</label></div>
                        <div className="search-box-low-2"><input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="nom..."/></div>
                        <div className="search-box-low-1"><label htmlFor="">Prenom :</label></div>
                        <div className="search-box-low-2"><input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="prenom..."/></div>
                        <div className="search-box-low-3"><button className="lancer-button" onClick={handleDataDoctNomPrenom}>Lancer</button></div>
                    </div>    
                </div>

                <div className="search-box">
                    <div><h2>Chercher ici a travers un titre</h2></div>
                    <div className="search-box-low">
                        <div className="search-box-low-1"><label htmlFor="">Titre :</label></div>
                        <div className="search-box-low-2"><input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="titre..."/></div>
                        <div className="search-box-low-3"><button className="lancer-button" onClick={handleDataDoct}>Lancer</button></div>
                    </div>
                </div>
               
                <button className="acceuil-button" onClick={handleShowRechercherClick}>Acceuil</button>
            </div>
        )}
        </>
        )}
        </div>
      );
    }; 

export default Rechercher ;