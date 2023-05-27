import {BillingAddress} from "./billing-address";

export class Payment {
  public id: number = -1;
  public type: string = "";
  public cardName: string = "";
  public cardNumber: string = "";
  public expiryMonth: string = "";
  public expiryYear: string = "";
  public cvc: number = -1;
  public holderName: string = "";
  public defaultPayment: boolean = false;
  public userBilling: BillingAddress = new BillingAddress; 
}
