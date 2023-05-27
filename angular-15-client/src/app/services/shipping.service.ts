import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConst} from '../constants/app.const';
import {UserShipping} from '../models/user-shipping';

@Injectable()
export class ShippingService {
    private serverPath = AppConst.serverPath;

  constructor(private http: HttpClient) { }

  newShipping(shipping: UserShipping) {
    let url = this.serverPath+"/shipping/add";

    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    return this.http.post(url, JSON.stringify(shipping), {headers: headers});
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

  setDefaultShipping(id: number) {
    let url = this.serverPath+"/shipping/setDefault";

    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    return this.http.post(url, id, {headers: headers});
  }

}
