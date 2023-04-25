import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class UserServiceSignup {
  private userDataSource = new BehaviorSubject({username: '', email : '', password : ''});
  currentUserData = this.userDataSource.asObservable();
  constructor() { }
  changeData(newUserData: {username: string, email: string; password: string; }) {
    this.userDataSource.next(newUserData)
  }
}