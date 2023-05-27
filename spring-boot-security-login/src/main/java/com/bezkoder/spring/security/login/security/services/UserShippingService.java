package com.bezkoder.spring.security.login.security.services;


import com.bezkoder.spring.security.login.models.UserShipping;

public interface UserShippingService {

    UserShipping findById(int id);
    void remove(int id);

}
