import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AddBookService {
  constructor(private http: HttpClient) { }

  sendBook(book: Book) {
    let url = "http://localhost:8080/book/add";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken') || ''
    });

    return this.http.post(url, book, { headers: headers });
  }
}
