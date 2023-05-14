import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RemoveBookService {

  constructor(private http: HttpClient) { }

  removeBook(bookId: number) {
    let url = "http://localhost:8080/book/remove";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'x-auth-token' : localStorage.getItem('xAuthToken') || ''
    });

    return this.http.post(url, bookId, { headers: headers });
  }
}
