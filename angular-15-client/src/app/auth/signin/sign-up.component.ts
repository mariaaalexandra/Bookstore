import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { UserService } from "./../../services/user.service";
import Keyboard from "simple-keyboard";
import { HttpClient } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
@Component({
  selector: 'app-sign-up',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  userData = {
    username: '',
    email: '',
    password: ''
  };
  constructor(private http: HttpClient) { }


  onSignUp(userData: { username: string, email: string, password: string }) {
  console.log(userData);

  this.http.post('http://localhost:8080/api/auth/signup', userData)
    .subscribe((res) => {
      console.log(res);
    });

 
}

  

  

}