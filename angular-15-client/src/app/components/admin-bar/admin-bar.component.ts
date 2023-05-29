import { Component, OnInit } from '@angular/core';
// import { LoginService} from '../../services/login.service';
import { Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.css']
})
export class AdminBarComponent implements OnInit {

  loggedIn = false;

  constructor( private router: Router,private authS:AuthService) { }

  ngOnInit() {
  
  }

  logout() {
    this.authS.logout();
    window.location.href = '/login'; // This will navigate to the login page
  }
  

}
