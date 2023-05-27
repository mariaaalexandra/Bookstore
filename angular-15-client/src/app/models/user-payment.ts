import {UserBilling} from './user-billing';

export class UserPayment {
  public id!: number;
  public type: string = "";
  public cardName: string = "";
  public cardNumber: string = "";
  public expiryMonth: string = "";
  public expiryYear: string = "";
  public cvc: number = -1;
  public holderName: string = "";
  public defaultPayment: boolean = false;
  public userBilling: UserBilling = new UserBilling;
}
