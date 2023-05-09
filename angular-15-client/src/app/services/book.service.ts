import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from '../models/Book';
import {AppConst} from '../constants/app.const';
import { Observable } from 'rxjs';


@Injectable()
export class BookService {

  constructor(private http: HttpClient) {}
    private serverPath = AppConst.serverPath;


    getBookList(): Observable<Book[]> {
      let url = "localhost:8080/book/bookList";
    
      let headers = new HttpHeaders({
        'Content-Type' : 'application/json',
        // 'x-auth-token' : localStorage.getItem('xAuthToken')
      });
    
      return this.http.get<Book[]>(url, {headers, responseType: 'json'});
    }

    getBook(bookId: number) {
      let url = this.serverPath+"/book/"+bookId;

      let headers = new HttpHeaders({
        'Content-Type' : 'application/json',
        // 'x-auth-token' : localStorage.getItem('xAuthToken')
      });

      return this.http.get<Book>(url, {headers, responseType: 'json'});
    }

  search(keyword: string) {
    let url = this.serverPath+"/book/search";

    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      // 'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post<Book []>(url, keyword, {headers, responseType: 'json'});
  }

}
