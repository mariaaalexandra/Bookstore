package com.bezkoder.spring.security.login.repository;

import java.util.Optional;

import com.bezkoder.spring.security.login.models.CartItem;
import com.bezkoder.spring.security.login.models.UserShipping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bezkoder.spring.security.login.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);

  User findUserById(Long id);



}
