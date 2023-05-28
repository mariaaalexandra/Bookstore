package com.bezkoder.spring.security.login.controllers;

import com.bezkoder.spring.security.login.models.*;
import com.bezkoder.spring.security.login.repository.UserRepository;
import com.bezkoder.spring.security.login.security.services.BookService;
import com.bezkoder.spring.security.login.security.services.CartItemService;
import com.bezkoder.spring.security.login.security.services.OrderService;
import com.bezkoder.spring.security.login.security.services.ShoppingCartService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/checkout")
public class CheckoutController {

    private Order order = new Order();
    @Autowired
    private UserRepository userService;
    @Autowired
    private OrderService orderService;
    @Autowired
    private CartItemService cartItemService;
    @Autowired
    private ShoppingCartService shoppingCartService;

    @Autowired
    private BookService bookService;

    @RequestMapping(value = "/checkout", method = RequestMethod.POST)
    public ResponseEntity checkout(@RequestParam long userId) {
        ShoppingCart shoppingCart = userService.findUserById(userId).getShoppingCart();
        List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);

        // Traverse through each CartItem in the list
        for (CartItem cartItem : cartItemList) {
            Book book = cartItem.getBook();
            int bookQty = cartItem.getQuantity();
            int totalNr = book.getInStockNumber();

            book.setInStockNumber(totalNr - bookQty);

            bookService.save(book);

        }
        shoppingCartService.clear(shoppingCart);

        return new ResponseEntity("Remove Success!", HttpStatus.OK);
    }
}
