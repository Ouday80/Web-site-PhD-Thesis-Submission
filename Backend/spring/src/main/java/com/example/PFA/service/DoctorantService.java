package com.example.PFA.service;

import com.example.PFA.model.Doctorant;
import org.springframework.stereotype.Service;

import java.util.List;


public interface DoctorantService {

    public Doctorant create(Doctorant doctorant);

    public Doctorant getDoctorantById(Integer id);

    public List<Doctorant> getDoctorantByNomAndPreNom(String nom , String prenom);
}
