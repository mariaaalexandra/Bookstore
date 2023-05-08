//package com.bezkoder.spring.security.login.security.services;
//
//
//import com.bezkoder.spring.security.login.models.Book;
//import com.bezkoder.spring.security.login.repository.BookRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import javax.validation.constraints.Null;
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class BookServiceImpl implements BookService {
//
//    @Autowired
//    private BookRepository bookRepository;
//
//    @Override
//    public Book save(Book book) {
//        return bookRepository.save(book);
//    }
//
//    @Override
//    public Book findOne(int id) {
//        return bookRepository.findById(id).orElse(null);
//    }
//
//    @Override
//    public List<Book> findAll() {
//         List<Book> bookList = (List<Book>) bookRepository.findAll();
//
//         List<Book> activeBookList = new ArrayList<>();
//
//         for (Book book: bookList){
//             if (book.isActive()){
//                 activeBookList.add(book);
//             }
//         }
//         return activeBookList;
//    }
//
//    @Override
//    public List<Book> searchByTitle(String title) {
//        List<Book> bookList = bookRepository.findByTitleContaining(title);
//
//        List<Book> activeBookList = new ArrayList<>();
//        for (Book book: bookList){
//            if (book.isActive()){
//                activeBookList.add(book);
//            }
//        }
//        return activeBookList;
//    }
//
//
//    @Override
//    public void removeOne(int id) {
//        bookRepository.delete(id);
//    }
//}
