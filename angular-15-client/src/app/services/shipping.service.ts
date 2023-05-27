import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AppConst} from '../constants/app.const';
import {UserShipping} from '../models/user-shipping';

@Injectable()
export class ShippingService {
    private serverPath = AppConst.serverPath;

  constructor(private http: HttpClient) { }

  newShipping(shipping: UserShipping, userId: number) {
    const url = `http://localhost:8080/shipping/add?userId=${userId}`;
  
    return this.http.post(url, shipping);
  }
  

  getShippingList(userId: number) {
    let url = `http://localhost:8080/shipping/getUserShippingList?userId=${userId}`;

    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });
  
    return this.http.get<UserShipping[]>(url, {headers: headers});
  }
  

  remove(id: number) {
    let url = this.serverPath+"/shipping/remove";

    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    return this.http.post(url, id, {headers: headers});
  }
  setDefaultShipping(id: string, userId: number) {
    let url = `http://localhost:8080/shipping/setDefault`;
  
    let headers = new HttpHeaders({
      'Content-Type': 'text/plain',
    });
  
    let params = new HttpParams().set('userId', String(userId));
  
    return this.http.post(url, id, { headers: headers, params: params });
  }
  

}
