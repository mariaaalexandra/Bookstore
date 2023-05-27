package com.bezkoder.spring.security.login.controllers;
import com.bezkoder.spring.security.login.models.User;
import com.bezkoder.spring.security.login.models.UserShipping;
import com.bezkoder.spring.security.login.repository.UserRepository;
import com.bezkoder.spring.security.login.security.services.UserService;
import com.bezkoder.spring.security.login.security.services.UserShippingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/shipping")
public class ShippingController {

    @Autowired
    private UserShippingService userShippingService;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity addNewUserShipping(@RequestBody UserShipping userShipping, @RequestParam long userId) {
        User user = userRepository.findUserById(userId);
        userService.updateShipping(userShipping, user);
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(value = "/getUserShippingList",  method = RequestMethod.GET)
    public List<UserShipping> getShippingList(@RequestParam long userId) {
        User user = userRepository.findUserById(userId);
        List<UserShipping> userShippingList = user.getUserShippingList();
        return userShippingList;
    }

    @RequestMapping(value = "/remove", method = RequestMethod.POST)
    public ResponseEntity removeShipping(@RequestBody String id) {
        userShippingService.remove(Integer.parseInt(id));
        return new ResponseEntity(HttpStatus.OK);
    }

}
