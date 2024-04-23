package com.example.PFA.service;

import com.example.PFA.model.ArticleRevue;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ArticleRevueService {

    public ArticleRevue create(ArticleRevue articleRevue);

    public List<ArticleRevue> getArticleRevueByTitre(String titre);

    List<ArticleRevue> getArticleRevueByCin(Integer cin);
}
