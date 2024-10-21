package com.example.Bmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Bmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
	
}
