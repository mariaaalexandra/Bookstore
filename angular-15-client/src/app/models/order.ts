import {CartItem} from "./cart-item";

export class Order {
  public id: number = -1;
  public orderDate: string = "";
  public orderStatus: string = "";
  public orderTotal: number = -1;
  public cartItemList: CartItem [] = [];
}
