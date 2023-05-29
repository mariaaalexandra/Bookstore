import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../services/user.service";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData: any;
  constructor(private user: UserService, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.user.currentUserData.subscribe((userData: any) => (this.userData = userData));
  }

  changeData(event: { target: { value: any; }; }) {
    var msg = event.target.value;
    this.user.changeData(msg);
  }
  
  login(data: any) {
    this.user.changeData(data);
  }
  
  onLogin(userData: { username: string, password: string, roles: string[] }) {
    this.http.post('http://localhost:8080/api/auth/signin', userData)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          // Store the user ID in localStorage
          console.log("id " + res.id);
          localStorage.setItem('userId', res.id);
          localStorage.setItem('role', res.roles[0]);
  
          // Navigate to the dashboard route after successful login
          if (res.roles && res.roles.includes("ROLE_USER"))
            this.router.navigate(['/dashboard']);
          else 
            this.router.navigate(['/admin']);
  
        },
        error: (error) => {
          console.log(error);
          // Handle error, e.g., show an error message to the user
        }
      });
  }
  
  
  
}