package com.bezkoder.spring.security.login.security.services;

import com.bezkoder.spring.security.login.models.User;
import com.bezkoder.spring.security.login.models.UserBilling;
import com.bezkoder.spring.security.login.models.UserPayment;
import com.bezkoder.spring.security.login.models.UserShipping;
import com.bezkoder.spring.security.login.repository.UserBillingRepository;
import com.bezkoder.spring.security.login.repository.UserPaymentRepository;
import com.bezkoder.spring.security.login.repository.UserRepository;
import com.bezkoder.spring.security.login.repository.UserShippingRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserShippingRepository userShippingRepository;

    private final UserRepository userRepository;

    @Autowired
    public UserBillingRepository userBillingRepository;

    @Autowired
    public UserPaymentRepository userPaymentRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public void updateShipping(UserShipping userShipping, User user) {
        userShipping.setUser(user);
        userShipping.setDefaultShipping(true);
        user.getUserShippingList().add(userShipping);
        userRepository.save(user);
    }

    @Transactional
    public void updateUserPayment(UserPayment userPayment, UserBilling userBilling, User user) {
        userPaymentRepository.save(userPayment);
        userBillingRepository.save(userBilling);
        userRepository.save(user);

        userPayment.setDefaultPayment(true);
        userBilling.setUserPayment(userPayment);
        user.getUserPaymentList().add(userPayment);
        userPaymentRepository.save(userPayment);
        userBillingRepository.save(userBilling);
        userRepository.save(user);
    }

    @Transactional
    public void setDefaultUserPayment(int userPaymentId, User user) {
        List<UserPayment> userPaymentList = (List<UserPayment>) userPaymentRepository.findAll();

        for (UserPayment userPayment: userPaymentList) {
            if (userPayment.getId() == userPaymentId){
                userPayment.setDefaultPayment(true);
                userPaymentRepository.save(userPayment);
            }
            else {
                userPayment.setDefaultPayment(false);
                userPaymentRepository.save(userPayment);
            }
        }
    }

    public void setDefaultShipping(int shippingId, User user) {
        List<UserShipping> userShippingList = (List<UserShipping>) userShippingRepository.findAll();

        for (UserShipping userShipping : userShippingList) {
            if (userShipping.getId() == shippingId){
                userShipping.setDefaultShipping(true);
                userShippingRepository.save(userShipping);
            }
            else {
                userShipping.setDefaultShipping(false);
                userShippingRepository.save(userShipping);
            }
        }
    }
}
