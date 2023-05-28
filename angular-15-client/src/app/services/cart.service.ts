import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CartItem} from '../models/cart-item';
import {AppConst} from '../constants/app.const';
import {ShoppingCart} from '../models/shopping-cart';


@Injectable()
export class CartService {
  private serverPath = AppConst.serverPath;

  constructor(private http: HttpClient) { }

  addItem(bookId: number, quantity: number, userId: number) {
    let url = `http://localhost:8080/cart/add?userId=${userId}`;
    let cartItemInfo = {
      "id": bookId,
      "quantity": quantity
    };
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    return this.http.post(url, cartItemInfo,{headers: headers});
  }

  getCartItemList(userId: number) {
    let url = `http://localhost:8080/cart/cartItemList?userId=${userId}`;

    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    return this.http.get<CartItem []>(url, {headers, responseType: 'json'});
}


getShoppingCart(userId: number) {
  let url = `http://localhost:8080/cart/shoppingCart?userId=${userId}`;

  let headers = new HttpHeaders({
    'Content-Type' : 'application/json',
  });

  return this.http.get<ShoppingCart>(url, {headers: headers});
}


  updateCartItem(bookId: number, quantity: number) {
    let url = 'http://localhost:8080/cart/updateCartItem';

    let cartItemInfo = {
      "id": bookId,
      "quantity": quantity
    };

    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    return this.http.post(url, cartItemInfo, {headers: headers});
  }

  removeCartItem(id: number) {
    let url = 'http://localhost:8080/cart/removeCartItem';
    let headers = new HttpHeaders({
      'Content-Type' : 'text/plain',
    });

    // Convert the id to string before sending it
    return this.http.post(url, id.toString(), {headers: headers, responseType: 'text'});
  }

}
