package com.example.PFA.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
public class ArticleRevue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer idArticle ;

    @ManyToOne(targetEntity = Doctorant.class)
    @JoinColumn(name = "cin")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    Doctorant doctorant;
    String titre ;
    List<String> listeAuteurs;
    @Column(columnDefinition = "TEXT")
    String Revue ;
    Date datePublication ;
    String facteurImpact ;

    public Integer getIdArticle() {
        return idArticle;
    }

    public void setIdArticle(Integer idArticle) {
        this.idArticle = idArticle;
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

    public String getRevue() {
        return Revue;
    }

    public void setRevue(String revue) {
        Revue = revue;
    }

    public Date getDatePublication() {
        return datePublication;
    }

    public void setDatePublication(Date datePublication) {
        this.datePublication = datePublication;
    }

    public String getFacteurImpact() {
        return facteurImpact;
    }

    public void setFacteurImpact(String facteurImpact) {
        this.facteurImpact = facteurImpact;
    }

    public Doctorant getDoctorant() {
        return doctorant;
    }

    public void setDoctorant(Doctorant doctorant) {
        this.doctorant = doctorant;
    }
}
