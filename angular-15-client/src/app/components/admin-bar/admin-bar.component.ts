import { Component, OnInit } from '@angular/core';
// import { LoginService} from '../../services/login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.css']
})
export class AdminBarComponent implements OnInit {

  loggedIn = false;

  constructor( private router: Router) { }

  ngOnInit() {
    // this.loginService.checkSession().subscribe(
    //   res => {
    //     this.loggedIn = true;
    //   },
    //   error => {
    //     this.loggedIn = false;
    //   });
    // this.router.adminigate(['/']);
  }

  logout() {
    // this.loginService.logout().subscribe(
    //   res => {
    //     location.reload();
    //   },
    //   error => {
    //     console.log(error);
    //   });
  }

}
