package com.bezkoder.spring.security.login.repository;


import com.bezkoder.spring.security.login.models.ShoppingCart;
import org.springframework.data.repository.CrudRepository;

public interface ShoppingCartRepository extends CrudRepository<ShoppingCart, Integer> {
}
