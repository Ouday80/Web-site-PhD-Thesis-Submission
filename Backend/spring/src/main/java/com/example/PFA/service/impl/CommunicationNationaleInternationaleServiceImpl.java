package com.example.PFA.service.impl;

import com.example.PFA.model.CommunicationNationaleInternationale;
import com.example.PFA.repository.CommunicationNationaleInternationaleRepository;
import com.example.PFA.service.CommunicationNationaleInternationaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommunicationNationaleInternationaleServiceImpl implements CommunicationNationaleInternationaleService {

    @Autowired
    CommunicationNationaleInternationaleRepository communicationNationaleInternationaleRepository;

    @Override
    public CommunicationNationaleInternationale create(CommunicationNationaleInternationale communicationNationaleInternationale) {
        return communicationNationaleInternationaleRepository.save(communicationNationaleInternationale);
    }

    @Override
    public List<CommunicationNationaleInternationale> getCommunicationNationaleInternationaleByTitre(String titre) {
        return communicationNationaleInternationaleRepository.findByTitre(titre);
    }

    @Override
    public List<CommunicationNationaleInternationale> getCommunicationNationaleInternationaleByCin(Integer cin) {
        return communicationNationaleInternationaleRepository.findByDoctorant_Cin(cin);
    }
}
