package com.bezkoder.spring.security.login.security.services;
import com.bezkoder.spring.security.login.repository.UserShippingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bezkoder.spring.security.login.models.UserShipping;

import java.util.Optional;

@Service
public class UserShippingServiceImpl implements UserShippingService {

    @Autowired
    private UserShippingRepository userShippingRepository;

    @Override
    public UserShipping findById(int id) {
        Optional<UserShipping> optional = userShippingRepository.findById(id);
        if(optional.isPresent()){
            return optional.get();
        } else {
            return null;
        }
    }


    @Override
    public void remove(int id) {
        userShippingRepository.deleteById(id);
    }

}
