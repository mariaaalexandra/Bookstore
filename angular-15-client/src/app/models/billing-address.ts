import {Order} from "./order";

export class BillingAddress {
  public id: number = -1;
  public billingAddressName: string = "";
  public billingAddressStreet: string = "";
  public billingAddressCity: string = "";
  public order: Order = new Order;
}
