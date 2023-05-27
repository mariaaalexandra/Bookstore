package com.bezkoder.spring.security.login.controllers;

import com.bezkoder.spring.security.login.models.CartItem;
import com.bezkoder.spring.security.login.models.Order;
import com.bezkoder.spring.security.login.models.User;
import com.bezkoder.spring.security.login.repository.UserRepository;
import com.bezkoder.spring.security.login.security.services.CartItemService;
import com.bezkoder.spring.security.login.security.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private UserRepository userService;
    @Autowired
    private CartItemService cartItemService;
    @Autowired
    private OrderService orderService;

    @RequestMapping(value = "/getOrderList", method = RequestMethod.GET)
    public List<Order> getOrderList(@RequestParam long userId) {
        User user = userService.findUserById(userId);
        List<Order> orderList = user.getOrderList();

        return orderList;
    }

    @RequestMapping("/getCartItemList")
    public List<CartItem> getCartItemList(@RequestBody String orderId, Principal principal) {
        Order order = orderService.findOne(Integer.parseInt(orderId));
        List<CartItem> cartItemList = cartItemService.findByOrder(order);
        return cartItemList;
    }
}
