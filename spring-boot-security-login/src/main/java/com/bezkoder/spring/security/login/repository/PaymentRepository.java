package com.bezkoder.spring.security.login.repository;


import com.bezkoder.spring.security.login.models.Payment;
import org.springframework.data.repository.CrudRepository;

public interface PaymentRepository extends CrudRepository<Payment, Integer> {
}
