package com.bezkoder.spring.security.login.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users",
       uniqueConstraints = {
           @UniqueConstraint(columnNames = "username"),
           @UniqueConstraint(columnNames = "email")
       })
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank
  @Size(max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  @NotBlank
  @Size(max = 120)
  private String password;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(name = "user_roles", 
             joinColumns = @JoinColumn(name = "user_id"),
             inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "shopping_cart")
  private ShoppingCart shoppingCart;

  public ShoppingCart getShoppingCart() {
    return shoppingCart;
  }


  public User() {
  }

  public User(String username, String email, String password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.shoppingCart = new ShoppingCart();
  }

  @OneToMany(mappedBy = "user")
  @JsonIgnore
  private List<Order> orderList;

  @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
  @JsonIgnore
  private List<UserPayment> userPaymentList;

  public List<Order> getOrderList() {
    return orderList;
  }

  public void setOrderList(List<Order> orderList) {
    this.orderList = orderList;
  }


  @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
  private List<UserShipping> userShippingList;

  public List<UserShipping> getUserShippingList() {
    return userShippingList;
  }

  public void setUserShippingList(List<UserShipping> userShippingList) {
    this.userShippingList = userShippingList;
  }

  public List<UserPayment> getUserPaymentList() {
    return userPaymentList;
  }

  public void setUserPaymentList(List<UserPayment> userPaymentList) {
    this.userPaymentList = userPaymentList;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<Role> getRoles() {
    return roles;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }
}
