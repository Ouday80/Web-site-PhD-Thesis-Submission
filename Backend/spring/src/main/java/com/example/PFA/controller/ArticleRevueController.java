package com.example.PFA.controller;

import com.example.PFA.model.ArticleRevue;
import com.example.PFA.service.ArticleRevueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/Article")
public class ArticleRevueController {

    ArticleRevueService articleRevueService;

    public ArticleRevueController(ArticleRevueService articleRevueService) {
        this.articleRevueService = articleRevueService;
    }

    @GetMapping("/{titre}")
    public List<ArticleRevue> getArticle (@PathVariable String titre){
        return articleRevueService.getArticleRevueByTitre(titre);
    }

    @GetMapping("/cin/{cin}")
    public List<ArticleRevue> getArticles (@PathVariable Integer cin){
        return articleRevueService.getArticleRevueByCin(cin);
    }

    @PostMapping("/save")
    public ArticleRevue save(@RequestBody ArticleRevue articleRevue){
        return articleRevueService.create(articleRevue);
    }
}
