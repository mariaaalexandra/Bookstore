package com.bezkoder.spring.security.login.security.services;


import com.bezkoder.spring.security.login.models.*;

import java.util.List;

public interface CartItemService {

    CartItem addBookToCartItem(Book book, User user, int quantity);
    List<CartItem> findByShoppingCart(ShoppingCart shoppingCart);
    List<CartItem> findByOrder(Order order);
    CartItem updateCartItem(CartItem cartItem);
    void removeCartItem(CartItem cartItem);
    CartItem findById(int id);
    CartItem save(CartItem  cartItem);
}
