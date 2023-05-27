package com.bezkoder.spring.security.login.security.services;


import com.bezkoder.spring.security.login.models.*;

public interface OrderService {

    Order createOrder(ShoppingCart shoppingCart,
                      ShippingAddress shippingAddress,
                      BillingAddress billingAddress,
                      Payment payment,
                      User user);

    Order findOne(int id);
}

