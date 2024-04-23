package com.example.PFA.controller;

import com.example.PFA.model.Doctorant;
import com.example.PFA.service.DoctorantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Doctorant")
public class DoctorantController {

    @Autowired
    DoctorantService doctorantService;

    @GetMapping("/cin/{cin}")
    public Doctorant getDoctorant (@PathVariable Integer cin){
        return doctorantService.getDoctorantById(cin);
    }

    @GetMapping("/nom/{nom}/{prenom}")
    public List<Doctorant> getDoctorantName (@PathVariable  String nom , @PathVariable String prenom){
        return doctorantService.getDoctorantByNomAndPreNom(nom,prenom);
    }

    @PostMapping("/save")
    public Doctorant save (@RequestBody Doctorant doctorant){
        return doctorantService.create(doctorant);
    }
}
