package com.example.PFA.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
public class Doctorant {
    String nom;
    String preNom;
    @Id
    Integer cin;
    Date dateNaissance;
    Date dateInscription;
    String genre;
    String lieuNaissance;
    String adresseMail;
    int numTelephone;

    @OneToMany(mappedBy = "doctorant" , targetEntity = ArticleRevue.class)
    List<ArticleRevue> listeArticleRevue;

    @OneToMany(mappedBy = "doctorant" , targetEntity = CommunicationNationaleInternationale.class)
    List<ArticleRevue> listeCommNatInt;

    @OneToMany(mappedBy = "doctorant" , targetEntity = ChapitreLivre.class)
    List<ArticleRevue> listeChapitreLivre;

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPreNom() {
        return preNom;
    }

    public void setPreNom(String preNom) {
        this.preNom = preNom;
    }

    public Integer getCin() {
        return cin;
    }

    public void setCin(Integer cin) {
        this.cin = cin;
    }

    public Date getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(Date dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public Date getDateInscription() {
        return dateInscription;
    }

    public void setDateInscription(Date dateInscription) {
        this.dateInscription = dateInscription;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getLieuNaissance() {
        return lieuNaissance;
    }

    public void setLieuNaissance(String lieuNaissance) {
        this.lieuNaissance = lieuNaissance;
    }

    public String getAdresseMail() {
        return adresseMail;
    }

    public void setAdresseMail(String adresseMail) {
        this.adresseMail = adresseMail;
    }

    public int getNumTelephone() {
        return numTelephone;
    }

    public void setNumTelephone(int numTelephone) {
        this.numTelephone = numTelephone;
    }

    public List<ArticleRevue> getListeArticleRevue() {
        return listeArticleRevue;
    }

    public void setListeArticleRevue(List<ArticleRevue> listeArticleRevue) {
        this.listeArticleRevue = listeArticleRevue;
    }

    public List<ArticleRevue> getListeCommNatInt() {
        return listeCommNatInt;
    }

    public void setListeCommNatInt(List<ArticleRevue> listeCommNatInt) {
        this.listeCommNatInt = listeCommNatInt;
    }

    public List<ArticleRevue> getListeChapitreLivre() {
        return listeChapitreLivre;
    }

    public void setListeChapitreLivre(List<ArticleRevue> listeChapitreLivre) {
        this.listeChapitreLivre = listeChapitreLivre;
    }
}
