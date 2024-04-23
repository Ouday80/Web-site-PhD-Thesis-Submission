package com.example.PFA.repository;

import com.example.PFA.model.ArticleRevue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ArticleRevueRepository extends JpaRepository<ArticleRevue,Integer> {

    List<ArticleRevue> findByTitre(String titre);

    List<ArticleRevue> findByDoctorant_cin(Integer cin);
}
