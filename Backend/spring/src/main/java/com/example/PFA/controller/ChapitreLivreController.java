package com.example.PFA.controller;

import com.example.PFA.model.ChapitreLivre;
import com.example.PFA.service.ChapitreLivreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/Chapitre")
public class ChapitreLivreController {

    @Autowired
    ChapitreLivreService chapitreLivreService;

    @GetMapping("/{titre}")
    public List<ChapitreLivre> getChapitre(@PathVariable  String titre){
        return chapitreLivreService.getChapitreLivreByTitreChapitre(titre);
    }

    @GetMapping("/cin/{cin}")
    public List<ChapitreLivre> getChapitres (@PathVariable Integer cin){
        return chapitreLivreService.getChapitreLivreByDoctorant_Cin(cin);
    }
    @PostMapping("/save")
    public ChapitreLivre save(@RequestBody ChapitreLivre chapitreLivre){
        return chapitreLivreService.create(chapitreLivre);
    }
}
