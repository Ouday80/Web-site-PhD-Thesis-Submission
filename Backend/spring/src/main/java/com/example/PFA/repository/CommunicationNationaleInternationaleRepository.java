package com.example.PFA.repository;

import com.example.PFA.model.CommunicationNationaleInternationale;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunicationNationaleInternationaleRepository extends JpaRepository<CommunicationNationaleInternationale,Integer> {
    List<CommunicationNationaleInternationale> findByTitre(String titre);

    List<CommunicationNationaleInternationale> findByDoctorant_Cin(Integer cin);
}
