package com.bezkoder.spring.security.login.controllers;
import com.bezkoder.spring.security.login.models.User;
import com.bezkoder.spring.security.login.models.UserBilling;
import com.bezkoder.spring.security.login.models.UserPayment;
import com.bezkoder.spring.security.login.repository.UserRepository;
import com.bezkoder.spring.security.login.security.services.UserPaymentService;
import com.bezkoder.spring.security.login.security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    UserPaymentService userPaymentService;
    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity addNewUserPayment(@RequestBody UserPayment userPayment, @RequestParam long userId) {
        User user = userRepository.findUserById(userId);
        UserBilling userBilling = userPayment.getUserBilling();
        userService.updateUserPayment(userPayment, userBilling, user);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value="/getUserPaymentList", method = RequestMethod.GET)
    public List<UserPayment> getUserPaymentList(@RequestParam long userId) {
        User user = userRepository.findUserById(userId);
        List<UserPayment> userPaymentList = user.getUserPaymentList();
        return userPaymentList;
    }

    @RequestMapping(value = "/remove", method = RequestMethod.POST)
    public ResponseEntity removeUserPayment(@RequestBody String id) {
    userPaymentService.remove(Integer.parseInt(id));
    return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/setDefault", method = RequestMethod.POST)
    public ResponseEntity setDefaultPayment(@RequestBody String userPaymentId, @RequestParam long userId) {
        User user = userRepository.findUserById(userId);
        userService.setDefaultUserPayment(Integer.parseInt(userPaymentId), user); // Update the method signature and remove parseInt()
        return new ResponseEntity(HttpStatus.OK);
    }

}
