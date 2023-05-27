package com.bezkoder.spring.security.login.repository;


import com.bezkoder.spring.security.login.models.ShippingAddress;
import org.springframework.data.repository.CrudRepository;

public interface ShippingAddressRepository extends CrudRepository<ShippingAddress, Integer> {
}
