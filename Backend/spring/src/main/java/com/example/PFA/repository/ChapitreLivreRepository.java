package com.example.PFA.repository;

import com.example.PFA.model.ChapitreLivre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChapitreLivreRepository extends JpaRepository<ChapitreLivre,Integer> {
    List<ChapitreLivre> findByTitreChapitre(String titre);

    List<ChapitreLivre> findByDoctorant_Cin(Integer cin);
}
