package com.bezkoder.spring.security.login.security.services;


import com.bezkoder.spring.security.login.models.Book;

import java.util.List;

public interface BookService {

    Book save(Book book);
    Book findOne(int id);
    List<Book> findAll();
    List<Book> searchByTitle(String title);
    void removeOne(int id);

    List<Book> getBooksByCategory(String category);
}
