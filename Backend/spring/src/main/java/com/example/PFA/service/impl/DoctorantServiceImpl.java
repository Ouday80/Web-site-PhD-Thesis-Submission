package com.example.PFA.service.impl;

import com.example.PFA.model.Doctorant;
import com.example.PFA.repository.DoctorantRepository;
import com.example.PFA.service.DoctorantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorantServiceImpl implements DoctorantService {

    @Autowired
    DoctorantRepository doctorantRepository;
    @Override
    public Doctorant create(Doctorant doctorant) {
        return doctorantRepository.save(doctorant);
    }

    @Override
    public Doctorant getDoctorantById(Integer id) {
        return doctorantRepository.findById(id).get();
    }

    @Override
    public List<Doctorant> getDoctorantByNomAndPreNom(String nom, String prenom) {
        return doctorantRepository.findByNomAndPreNom(nom,prenom);
    }
}
