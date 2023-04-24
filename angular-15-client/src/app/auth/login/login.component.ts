import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../services/user.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData: any;
  constructor(private user: UserService) {}

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
}
