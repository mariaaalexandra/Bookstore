package com.bezkoder.spring.security.login.repository;

import com.bezkoder.spring.security.login.models.BillingAddress;
import org.springframework.data.repository.CrudRepository;

public interface BillingAddressRepository extends CrudRepository<BillingAddress, Integer> {
}
