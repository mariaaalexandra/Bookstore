import { Component, OnInit } from '@angular/core';
import {AppConst} from "../../constants/app.const";
import {Book} from "../../models/Book";
import {CartItem} from "../../models/cart-item";
import {ShippingAddrees} from "../../models/shipping-addrees";
import {ShoppingCart} from "../../models/shopping-cart";
import {BillingAddress} from "../../models/billing-address";
import {UserPayment} from "../../models/user-payment";
import {UserShipping} from "../../models/user-shipping";
import {Payment} from "../../models/payment";
import {Order} from "../../models/order";
import {NavigationExtras, Router} from "@angular/router";
import {CheckoutService} from "../../services/checkout.service";
import {CartService} from "../../services/cart.service";
import {ShippingService} from "../../services/shipping.service";
import {PaymentService} from "../../services/payment.service";
import { MatDialog } from '@angular/material/dialog';
 

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public serverpath = AppConst.serverPath;
  public selectedBook: Book = new Book;
  public cartItemList: CartItem[] = [];
  public cartItemNumber: number = -1;
  public shoppingCart: ShoppingCart = new ShoppingCart();
  public selectedTab: number = -1;
  public shippingAddress: ShippingAddrees = new ShippingAddrees();
  public billingAddress: BillingAddress = new BillingAddress();
  public userPayment: UserPayment = new UserPayment();
  public userPaymentList: UserPayment [] = [];
  public userShippingList: UserShipping [] = [];
  public payment: Payment = new Payment();
  public emptyShippingList: boolean = false;
  public emptyPaymentList: boolean = false;
  public order: Order = new Order();

  constructor(public router: Router, public dialog: MatDialog, public cartService: CartService, public shippingService: ShippingService, public paymentService: PaymentService, public checkoutService: CheckoutService) { }


  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigateByUrl('/dashboard');
    });
  }

  selectedChange(val: number) {
    this.selectedTab = val;
  }

  goToPayment() {
    this.selectedTab = 1;
  }

  goToReview() {
    this.selectedTab = 2;
  }

  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/viewBook', this.selectedBook.id]);
  }

  getCartItemList() {
    this.cartService.getCartItemList(Number(localStorage.getItem('userId'))).subscribe(
      res => {
        this.cartItemList = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  setShippingAddress(userShipping: UserShipping) {
    this.shippingAddress.receiverName = userShipping.receiverName;
    this.shippingAddress.street = userShipping.street;
    this.shippingAddress.city = userShipping.city;
  }

  setPaymentMethod(userPayment: UserPayment) {
    this.payment.type = userPayment.type;
    this.payment.cardNumber = userPayment.cardNumber;
    this.payment.expiryMonth = userPayment.expiryMonth;
    this.payment.expiryYear = userPayment.expiryYear;
    this.payment.cvc = userPayment.cvc;
    this.payment.holderName = userPayment.holderName;
    this.payment.defaultPayment = userPayment.defaultPayment;
    this.billingAddress.billingAddressName = userPayment.userBilling.userBillingName;
    this.billingAddress.billingAddressStreet = userPayment.userBilling.userBillingStreet;
    this.billingAddress.billingAddressCity = userPayment.userBilling.userBillingCity;
    console.log("p " + this.payment);
  }

  setBillingAsShipping(checked: boolean){
    if(checked) {
      this.billingAddress.billingAddressName = this.shippingAddress.receiverName;
      this.billingAddress.billingAddressStreet = this.shippingAddress.street;
      this.billingAddress.billingAddressCity = this.shippingAddress.city;
    } else {
      this.billingAddress.billingAddressName = "";
      this.billingAddress.billingAddressStreet = "";
      this.billingAddress.billingAddressCity = "";
    }
  }

  onSubmit() {

  }


  ngOnInit() {
    this.getCartItemList();

    this.cartService.getShoppingCart(Number(localStorage.getItem('userId'))).subscribe(
      res => {
        this.shoppingCart = res;
      },
      error => {
        console.log(error);
      }
    );

    this.shippingService.getShippingList(Number(localStorage.getItem('userId'))).subscribe(
      res => {
        this.userShippingList = res;
        if (this.userShippingList.length){
          this.emptyShippingList = false;

          for (let userShipping of this.userShippingList){
            if (userShipping.defaultShipping){
              this.setShippingAddress(userShipping);
            }
          }
        }
      },
      error => {
        console.log(error);
      }
    );

    this.paymentService.getUserPaymentList(Number(localStorage.getItem('userId'))).subscribe(
      res => {
        this.userPaymentList = res;
        if (this.userPaymentList.length){
          this.emptyPaymentList = false;

          for (let userPayment of this.userPaymentList){
            if (userPayment.defaultPayment){
              this.setPaymentMethod(userPayment);
            }
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  template: `<h2 mat-dialog-title>Dialog title</h2>
              <mat-dialog-content class="mat-typography">
                <p>Successfully purchased!</p>
              </mat-dialog-content>
              <mat-dialog-actions align="end">
                <button mat-button mat-dialog-close>Close</button>
              </mat-dialog-actions>`,
})
export class DialogContentExampleDialog {}
