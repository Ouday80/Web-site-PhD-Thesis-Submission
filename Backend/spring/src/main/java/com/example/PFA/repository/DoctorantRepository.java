package com.example.PFA.repository;

import com.example.PFA.model.Doctorant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorantRepository extends JpaRepository<Doctorant,Integer> {
    List<Doctorant> findByNomAndPreNom(String nom, String prenom);
}
