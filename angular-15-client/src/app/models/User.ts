import {UserShipping} from "./user-shipping";
import {UserPayment} from "./user-payment";

export class User {
  public id: number | undefined;
  public firstName: string | undefined;
  public lastName: string | undefined;
  public username: string | undefined;
  public password: string | undefined;
  public email: string | undefined
  public phone: string | undefined;
  public enabled: boolean | undefined;
  public shippingList: UserShipping[] | undefined;
  public paymentList: UserPayment[] | undefined;
}
