package com.bezkoder.spring.security.login.repository;


import com.bezkoder.spring.security.login.models.UserBilling;
import org.springframework.data.repository.CrudRepository;

public interface UserBillingRepository extends CrudRepository<UserBilling, Integer> {
}
