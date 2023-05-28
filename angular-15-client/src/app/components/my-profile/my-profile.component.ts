import { Component, OnInit } from '@angular/core';
import {AppConst} from '../../constants/app.const';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
// import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {UserShipping} from '../../models/user-shipping';
import {ShippingService} from '../../services/shipping.service';
import {UserPayment} from '../../models/user-payment';
import {UserBilling} from '../../models/user-billing';
import {PaymentService} from "../../services/payment.service";
import {Order} from "../../models/order";
import { MatDialog } from '@angular/material/dialog';
// import {OrderService} from "../../services/O";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  // public loggedIn: boolean;
  public dataFetched = false;
  public user: User = new User();


  public defaultShippingSet: boolean = false;
  public defaultShippingId: number = 0;
  public userShipping: UserShipping = new UserShipping();
  public userShippingList: UserShipping[] = [];
  private updateSuccess: boolean = false;
  public userNotFound: boolean = false;
  public selectedShippingTab = 0;
  public selectedBillingTab = 0;

  public userPayment: UserPayment = new UserPayment();
  public userBilling: UserBilling = new UserBilling();
  public userPaymentList: UserPayment[] = [];
  public defaultPaymentSet:  boolean = false;
  public defaultUserPaymentId: number = 0;

  public cartItemList: any [] = [];
  public orderList: Order[] = [];
  public order: Order = new Order();
  public displayOrderDetail: boolean = false;


  

  constructor(public userService: UserService, public dialog: MatDialog, public router: Router, public shippingService: ShippingService, public paymentService: PaymentService) { }

  onUpdateUserInfo() {
    // Assuming that `this.user` is an object with fields `id`, `username`, and `email`
    this.userService.updateUserInfo(this.user.id, this.user.username, this.user.email).subscribe(
      res => {
        console.log(res);
        this.updateSuccess = true;
      },
      error => {
        console.log(error);
        const errorMsg = error.error;
        if (errorMsg === 'User not found') {
          this.userNotFound = true; // You should handle this case in your UI
        }
      }
    );
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);

  }

  getCurrentUser() {
  this.userService.getCurrentUser(Number(localStorage.getItem('userId'))).subscribe(
    res => {
      this.user = res;
      this.getUserShippingList();
      this.getUserPaymentList();

      for (let index in this.userShippingList) {
        if(this.userShippingList[index].defaultShipping === true) {
          this.defaultShippingId = this.userShippingList[index].id;
          break;
        }
      }

      for (let index in this.userPaymentList) {
        if(this.userPaymentList[index].defaultPayment) {
          this.defaultUserPaymentId = this.userPaymentList[index].id;
          break;
        }
      }
      this.dataFetched = true;
    },
    error => {
      console.log(error);
    }
  );
  }

  selectedShippingChange(val: number) {
  this.selectedShippingTab = val;
  }

  selectedBillingChange(val: number) {
    this.selectedBillingTab = val;
  }


  onNewShipping() {
    this.shippingService.newShipping(this.userShipping, Number(localStorage.getItem('userId'))).subscribe(
      res => {
        this.getCurrentUser();
        this.selectedShippingTab = 0;
      },
      error => {
        console.log(error);
      }
    );
  }

  getUserShippingList() {
    this.shippingService.getShippingList(Number(localStorage.getItem('userId'))).subscribe(
      res => {
        this.userShippingList = res;
      },
      error => {
        console.log(error);
      }
    );
  }


  onUpdateShipping(shipping: UserShipping) {
    this.userShipping = shipping;
    this.selectedShippingTab = 1;
  }

  onRemoveShipping(id: number) {
    this.shippingService.remove(id).subscribe(
      res => {
        this.getCurrentUser();
      },
      error => {
        console.log(error);
      }
    );
  }

  setDefaultShipping() {
    this.defaultShippingSet = false;
    this.shippingService.setDefaultShipping(String(this.defaultShippingId),Number(localStorage.getItem('userId'))).subscribe(
      res => {
        this.getCurrentUser();
        this.defaultShippingSet = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  onNewPayment() {
    this.paymentService.newUserPayment(this.userPayment, String(localStorage.getItem('userId'))).subscribe(
      res => {
        this.getCurrentUser();
        this.selectedBillingTab = 0;
        this.userPayment = new UserPayment();
      },
      error => {
        console.log(error);
      }
    );
  }

  getUserPaymentList() {
    this.paymentService.getUserPaymentList(Number(localStorage.getItem('userId'))).subscribe(
      res => {
        this.userPaymentList = res;
      },
      error => {
        console.log(error);
      }
    );
  }


  onUpdatePayment (payment: UserPayment) {
    this.userPayment = payment;
    this.userBilling = payment.userBilling;
    this.selectedBillingTab = 1;
  }

  onRemovePayment(id: number) {
    this.paymentService.remove(id).subscribe(
      res => {
        this.getCurrentUser();
      },
      error => {
        console.log(error);
      }
    );
  }

  setDefaultPayment() {
    this.defaultPaymentSet = false;
    this.paymentService.setDefaultUserPayment(String(this.defaultUserPaymentId), Number(localStorage.getItem('userId'))).subscribe(
      res => {
        this.getCurrentUser();
        this.defaultPaymentSet = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  onDisplayOrder(order: Order) {
    this.order = order;
    this.displayOrderDetail = true;
  }


  ngOnInit() {

    this.getCurrentUser();

    // this.orderService.getOrderList().subscribe(
    //   res => {
    //     this.orderList = res;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );

    this.userPayment.type = '';
    this.userPayment.expiryMonth =  '';
    this.userPayment.expiryYear = '';
    this.userPayment.userBilling = this.userBilling;
    this.defaultPaymentSet = false;
    this.defaultShippingSet = false;
  }

  

}

@Component({
  selector: 'dialog-content',
  template: `<h2 mat-dialog-title>Update</h2>
              <mat-dialog-content class="mat-typography">
                <p>Fields updated successfully!</p>
              </mat-dialog-content>
              <mat-dialog-actions align="end">
                <button mat-button mat-dialog-close>Close</button>
              </mat-dialog-actions>`,
})
export class DialogContent {}
