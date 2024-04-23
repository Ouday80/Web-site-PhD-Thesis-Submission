package com.example.PFA.service.impl;

import com.example.PFA.model.ChapitreLivre;
import com.example.PFA.repository.ChapitreLivreRepository;
import com.example.PFA.service.ChapitreLivreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChapitreLivreServiceImpl implements ChapitreLivreService {

    @Autowired
    ChapitreLivreRepository chapitreLivreRepository;

    @Override
    public ChapitreLivre create(ChapitreLivre chapitreLivre) {
        return chapitreLivreRepository.save(chapitreLivre);
    }

    @Override
    public List<ChapitreLivre> getChapitreLivreByTitreChapitre(String titre) {
        return chapitreLivreRepository.findByTitreChapitre(titre);
    }

    @Override
    public List<ChapitreLivre> getChapitreLivreByDoctorant_Cin(Integer cin) {
        return chapitreLivreRepository.findByDoctorant_Cin(cin);
    }
}
