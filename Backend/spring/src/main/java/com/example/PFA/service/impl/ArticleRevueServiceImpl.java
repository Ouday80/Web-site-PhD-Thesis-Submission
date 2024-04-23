package com.example.PFA.service.impl;

import com.example.PFA.model.ArticleRevue;
import com.example.PFA.repository.ArticleRevueRepository;
import com.example.PFA.service.ArticleRevueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleRevueServiceImpl implements ArticleRevueService {

    ArticleRevueRepository articleRevueRepository;

    public ArticleRevueServiceImpl(ArticleRevueRepository articleRevueRepository) {
        this.articleRevueRepository = articleRevueRepository;
    }

    @Override
    public ArticleRevue create(ArticleRevue articleRevue) {
        return articleRevueRepository.save(articleRevue);
    }

    @Override
    public List<ArticleRevue> getArticleRevueByTitre(String titre) {
        return articleRevueRepository.findByTitre(titre);
    }

    @Override
    public List<ArticleRevue> getArticleRevueByCin(Integer cin) {
        return articleRevueRepository.findByDoctorant_cin(cin);
    }


}
