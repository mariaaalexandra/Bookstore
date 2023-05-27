package com.bezkoder.spring.security.login.security.services;

import com.bezkoder.spring.security.login.models.UserPayment;
import com.bezkoder.spring.security.login.repository.UserPaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserPaymentServiceImpl implements UserPaymentService {

    @Autowired
    private UserPaymentRepository userPaymentRepository;

    @Override
    public UserPayment findById(int id) {
        Optional<UserPayment> optional = userPaymentRepository.findById(id);
        if(optional.isPresent()) {
            return optional.get();
        } else {
            // Handle the case where the UserPayment is not found
            return null;
        }
    }

    @Override
    public void remove(int id) {
        Optional<UserPayment> userPayment = userPaymentRepository.findById(id);
        userPayment.ifPresent(userPaymentRepository::delete);
    }

}
