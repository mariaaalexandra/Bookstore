package com.bezkoder.spring.security.login.repository;

import com.bezkoder.spring.security.login.models.BookToCartItem;
import com.bezkoder.spring.security.login.models.CartItem;
import org.springframework.data.repository.CrudRepository;

public interface BookToCartItemRepository extends CrudRepository<BookToCartItem, Integer> {

    void deleteByCartItem(CartItem cartItem);
}
