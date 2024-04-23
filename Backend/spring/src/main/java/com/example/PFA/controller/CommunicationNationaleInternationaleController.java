package com.example.PFA.controller;

import com.example.PFA.model.CommunicationNationaleInternationale;
import com.example.PFA.service.CommunicationNationaleInternationaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Communication")
public class CommunicationNationaleInternationaleController {

    @Autowired
    CommunicationNationaleInternationaleService communicationNationaleInternationaleService;

    @GetMapping("/{titre}")
    public List<CommunicationNationaleInternationale> getComm (@PathVariable String titre){
        return communicationNationaleInternationaleService.getCommunicationNationaleInternationaleByTitre(titre);
    }

    @GetMapping("/cin/{cin}")
    public List<CommunicationNationaleInternationale> getComms (@PathVariable Integer cin){
        return communicationNationaleInternationaleService.getCommunicationNationaleInternationaleByCin(cin);
    }

    @PostMapping("/save")
    public CommunicationNationaleInternationale save (@RequestBody CommunicationNationaleInternationale communicationNationaleInternationale){
        return communicationNationaleInternationaleService.create(communicationNationaleInternationale);
    }
}
