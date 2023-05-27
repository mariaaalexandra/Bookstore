package com.bezkoder.spring.security.login.controllers;

import com.bezkoder.spring.security.login.models.*;
import com.bezkoder.spring.security.login.repository.UserRepository;
import com.bezkoder.spring.security.login.security.services.CartItemService;
import com.bezkoder.spring.security.login.security.services.OrderService;
import com.bezkoder.spring.security.login.security.services.ShoppingCartService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
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

    @RequestMapping(value = "/checkout", method = RequestMethod.POST)
    public Order checkout(@RequestBody HashMap<String, Object> mapper,@RequestParam long userId) {

        ObjectMapper objectMapper = new ObjectMapper();

        ShippingAddress shippingAddress = objectMapper.convertValue(mapper.get("shippingAddress"), ShippingAddress.class);
        BillingAddress billingAddress = objectMapper.convertValue(mapper.get("billingAddress"), BillingAddress.class);
        Payment payment = objectMapper.convertValue(mapper.get("payment"), Payment.class);

        ShoppingCart shoppingCart = userService.findUserById(userId).getShoppingCart();
        List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);
        User user = userService.findUserById(userId);

        Order order = orderService.createOrder(shoppingCart, shippingAddress, billingAddress, payment, user);

        shoppingCartService.clear(shoppingCart);

        return order;
    }
}
