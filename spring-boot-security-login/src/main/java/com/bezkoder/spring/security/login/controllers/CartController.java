package com.bezkoder.spring.security.login.controllers;

import com.bezkoder.spring.security.login.models.Book;
import com.bezkoder.spring.security.login.models.CartItem;
import com.bezkoder.spring.security.login.models.ShoppingCart;
import com.bezkoder.spring.security.login.models.User;
import com.bezkoder.spring.security.login.repository.UserRepository;
import com.bezkoder.spring.security.login.security.services.BookService;

import com.bezkoder.spring.security.login.security.services.CartItemService;

import com.bezkoder.spring.security.login.security.services.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private BookService bookService;

    @Autowired
    UserRepository userRepository;
    @Autowired
    private CartItemService cartItemService;
    @Autowired
    private ShoppingCartService shoppingCartService;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity addItem(@RequestBody HashMap<String, String> mapper, @RequestParam long userId) {
        String bookId = mapper.get("id");
        String quantity = mapper.get("quantity");
        User user = userRepository.findUserById(userId);
        Book book = bookService.findOne(Integer.parseInt(bookId));

        if (Integer.parseInt(quantity) > book.getInStockNumber()) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        cartItemService.addBookToCartItem(book, user, Integer.parseInt(quantity));
        return new ResponseEntity( HttpStatus.OK);
    }

    @RequestMapping(value = "/cartItemList", method = RequestMethod.GET)
    public List<CartItem> getCartItemList(@RequestParam long userId) {
        User user = userRepository.findUserById(userId);
        ShoppingCart shoppingCart = user.getShoppingCart();
        List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);
        shoppingCartService.update(shoppingCart);
        return cartItemList;
    }
    @RequestMapping(value = "/shoppingCart", method = RequestMethod.GET)
    public ShoppingCart getShoppingCart(@RequestParam long userId) {
        User user = userRepository.findUserById(userId);
        ShoppingCart shoppingCart = user.getShoppingCart();

        shoppingCartService.update(shoppingCart);
        return shoppingCart;
    }

    @RequestMapping(value = "/removeCartItem", method = RequestMethod.POST)
    public ResponseEntity removeCartItem(@RequestBody String id) {
        CartItem cartItem = cartItemService.findById(Integer.parseInt(id));
        cartItemService.removeCartItem(cartItem);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/updateCartItem", method = RequestMethod.POST)
    public ResponseEntity updateCartItem(@RequestBody HashMap<String, String> mapper) {
        String cartItemId = mapper.get("id");
        String quantity = mapper.get("quantity");
        CartItem cartItem = cartItemService.findById(Integer.parseInt(cartItemId));
        cartItem.setQuantity(Integer.parseInt(quantity));
        cartItemService.updateCartItem(cartItem);
        return new ResponseEntity(HttpStatus.OK);
    }
}
