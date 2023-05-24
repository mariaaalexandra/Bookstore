package com.bezkoder.spring.security.login.repository;
import com.bezkoder.spring.security.login.models.Order;
import com.bezkoder.spring.security.login.models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrderRepository extends CrudRepository<Order, Integer> {

    List<Order> findByUser(User user);
}
