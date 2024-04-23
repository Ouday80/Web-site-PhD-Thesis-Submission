package com.example.PFA.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
public class ChapitreLivre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer idChapitre ;
    @ManyToOne(targetEntity = Doctorant.class)
    @JoinColumn(name = "cin")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    Doctorant doctorant;
    String titreChapitre ;
    List<String> listeAuteurs ;
    String titreLivre ;
    Date dateSortie ;
    @Column(columnDefinition = "TEXT")
    String resumeChapitre ;
    @Column(columnDefinition = "TEXT")
    String motsCles ;

    public Integer getIdChapitre() {
        return idChapitre;
    }

    public void setIdChapitre(Integer idChapitre) {
        this.idChapitre = idChapitre;
    }

    public String getTitreChapitre() {
        return titreChapitre;
    }

    public void setTitreChapitre(String titreChapitre) {
        this.titreChapitre = titreChapitre;
    }

    public List<String> getListeAuteurs() {
        return listeAuteurs;
    }

    public void setListeAuteurs(List<String> listeAuteurs) {
        this.listeAuteurs = listeAuteurs;
    }

    public String getTitreLivre() {
        return titreLivre;
    }

    public void setTitreLivre(String titreLivre) {
        this.titreLivre = titreLivre;
    }

    public Date getDateSortie() {
        return dateSortie;
    }

    public void setDateSortie(Date dateSortie) {
        this.dateSortie = dateSortie;
    }

    public String getResumeChapitre() {
        return resumeChapitre;
    }

    public void setResumeChapitre(String resumeChapitre) {
        this.resumeChapitre = resumeChapitre;
    }

    public String getMotsCles() {
        return motsCles;
    }

    public void setMotsCles(String motsCles) {
        this.motsCles = motsCles;
    }

    public Doctorant getDoctorant() {
        return doctorant;
    }

    public void setDoctorant(Doctorant doctorant) {
        this.doctorant = doctorant;
    }
}
