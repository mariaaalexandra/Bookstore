package com.bezkoder.spring.security.login.repository;


import com.bezkoder.spring.security.login.models.UserPayment;
import org.springframework.data.repository.CrudRepository;

public interface UserPaymentRepository extends CrudRepository<UserPayment, Integer> {
}
