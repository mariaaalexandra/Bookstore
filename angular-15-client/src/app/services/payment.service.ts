import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AppConst} from '../constants/app.const';
import {UserPayment} from '../models/user-payment';

@Injectable()
export class PaymentService {
  newPayment(userPayment: UserPayment, arg1: number) {
    throw new Error('Method not implemented.');
  }
  private serverPath = AppConst.serverPath;

  constructor(private http: HttpClient) { }

  newUserPayment(userPayment: UserPayment, userId: string) {
    let url = `http://localhost:8080/payment/add?userId=${userId}`;
  
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });
  
    return this.http.post(url, JSON.stringify(userPayment), {headers: headers});
  }
  



  getUserPaymentList(userId: number) {
    let url = `http://localhost:8080/payment/getUserPaymentList?userId=${userId}`;

    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    return this.http.get<UserPayment[]>(url,{headers: headers});
}


  remove(id: number) {
    let url = this.serverPath+"/payment/remove";

    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    return this.http.post(url, id, {headers: headers});
  }

  setDefaultUserPayment(userPaymentId: string, userId: number) {
    let url = `http://localhost:8080/payment/setDefault?userId=${userId}`;
  
    let headers = new HttpHeaders({
      'Content-Type': 'text/plain',
    });
  
    return this.http.post(url, userPaymentId, { headers: headers });
  }
  
  

}
