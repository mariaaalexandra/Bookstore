import {UserBilling} from './user-billing';

export class UserPayment {
  public id: number | undefined;
  public type: string | undefined;
  public cardName: string | undefined;
  public cardNumber: string | undefined;
  public expiryMonth: string | undefined;
  public expiryYear: string | undefined;
  public cvc: number | undefined;
  public holderName: string | undefined;
  public defaultPayment: boolean | undefined;
  public userBilling: UserBilling | undefined;
}
