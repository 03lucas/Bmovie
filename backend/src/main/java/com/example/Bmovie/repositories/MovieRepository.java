package com.example.Bmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Bmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
