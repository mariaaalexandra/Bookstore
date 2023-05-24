package com.bezkoder.spring.security.login.repository;

import com.bezkoder.spring.security.login.models.CartItem;
import com.bezkoder.spring.security.login.models.Order;
import com.bezkoder.spring.security.login.models.ShoppingCart;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CartItemRepository extends CrudRepository<CartItem, Integer> {

    List<CartItem> findByShoppingCart(ShoppingCart shoppingCart);
    List<CartItem> findByOrder(Order order);
}
