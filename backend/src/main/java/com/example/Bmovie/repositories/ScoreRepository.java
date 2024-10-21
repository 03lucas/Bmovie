package com.example.Bmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Bmovie.entities.Score;
import com.example.Bmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}