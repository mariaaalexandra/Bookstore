import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Order} from "../models/order";
import {AppConst} from "../constants/app.const";

@Injectable()
export class CheckoutService {

  private serverPath = AppConst.serverPath;

  constructor(private http: HttpClient) {}

  checkout(userId: number) {
    let url = "http://localhost:8080/checkout/checkout?userId=" + userId;

    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    return this.http.post(url, {headers, responseType: 'json'});
  }


  getUserOrder() {
    let url = this.serverPath+"/checkout/getUserOrder";

    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    return this.http.get<Order>(url, {headers, responseType: 'json'});
  }
}
