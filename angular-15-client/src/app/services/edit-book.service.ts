import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from '../models/Book';

@Injectable()
export class EditBookService {

  constructor(private http: HttpClient) { }

  sendBook(book: Book) {
    let url = "http://localhost:8080/book/update";
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, JSON.stringify(book), {headers: headers});
  }

}
