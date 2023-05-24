package com.bezkoder.spring.security.login.security.services;


import com.bezkoder.spring.security.login.models.ShoppingCart;

public interface ShoppingCartService {

    ShoppingCart update(ShoppingCart shoppingCart);
    void clear(ShoppingCart shoppingCart);
}
