package com.bezkoder.spring.security.login.security.services;


import com.bezkoder.spring.security.login.models.UserPayment;

public interface UserPaymentService {

    UserPayment findById(int id);
    void remove(int id);
}
