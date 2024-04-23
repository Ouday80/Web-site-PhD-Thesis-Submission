package com.example.PFA.service;

import com.example.PFA.model.ChapitreLivre;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ChapitreLivreService {

    public ChapitreLivre create(ChapitreLivre chapitreLivre);

    public List<ChapitreLivre> getChapitreLivreByTitreChapitre(String titre);

    List<ChapitreLivre> getChapitreLivreByDoctorant_Cin(Integer cin);
}
