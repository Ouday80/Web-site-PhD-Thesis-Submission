package com.example.PFA.service;

import com.example.PFA.model.CommunicationNationaleInternationale;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CommunicationNationaleInternationaleService {

    public CommunicationNationaleInternationale create(CommunicationNationaleInternationale communicationNationaleInternationale);

    public List<CommunicationNationaleInternationale> getCommunicationNationaleInternationaleByTitre(String titre);

    List<CommunicationNationaleInternationale> getCommunicationNationaleInternationaleByCin(Integer cin);
}
