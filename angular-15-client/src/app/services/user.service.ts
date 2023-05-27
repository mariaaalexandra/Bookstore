import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';


@Injectable()
export class UserService {
  private userDataSource = new BehaviorSubject({email : '', password : ''});
  currentUserData = this.userDataSource.asObservable();
  constructor(private http: HttpClient) { }
  changeData(newUserData: { email: string; password: string; }) {
    this.userDataSource.next(newUserData)
  }

  getCurrentUser(userId: number) {
    let url = `http://localhost:8080/api/auth/getCurrentUser?userId=${userId}`;
  
    let tokenHeader = new HttpHeaders({
      'Content-Type' : 'application/json',
    });
  
    return this.http.get<User>(url);
  }

  updateUserInfo(id: number, username: string, email: string) {
    let url = `http://localhost:8080/api/auth/updateUserInfo`;
    const body = { id, username, email };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, body, { headers });
  }
  
}