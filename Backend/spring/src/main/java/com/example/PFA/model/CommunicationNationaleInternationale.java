package com.example.PFA.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
public class CommunicationNationaleInternationale {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    Integer idCommunication ;
    @ManyToOne(targetEntity = Doctorant.class)
    @JoinColumn(name = "cin")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    Doctorant doctorant;
    String titre ;
    List<String> listeAuteurs ;
    String conference ;
    String classeConference ;
    Date datePublication ;

    public Integer getIdCommunication() {
        return idCommunication;
    }

    public void setIdCommunication(Integer idCommunication) {
        this.idCommunication = idCommunication;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public List<String> getListeAuteurs() {
        return listeAuteurs;
    }

    public void setListeAuteurs(List<String> listeAuteurs) {
        this.listeAuteurs = listeAuteurs;
    }

    public String getConference() {
        return conference;
    }

    public void setConference(String conference) {
        this.conference = conference;
    }

    public String getClasseConference() {
        return classeConference;
    }

    public void setClasseConference(String classeConference) {
        this.classeConference = classeConference;
    }

    public String getSujet() {
        return sujet;
    }

    public void setSujet(String sujet) {
        this.sujet = sujet;
    }

    public String getDomaineRecherche() {
        return domaineRecherche;
    }

    public void setDomaineRecherche(String domaineRecherche) {
        this.domaineRecherche = domaineRecherche;
    }

    public Date getDatePublication() {
        return datePublication;
    }

    public void setDatePublication(Date datePublication) {
        this.datePublication = datePublication;
    }

    public Doctorant getDoctorant() {
        return doctorant;
    }

    public void setDoctorant(Doctorant doctorant) {
        this.doctorant = doctorant;
    }
}
