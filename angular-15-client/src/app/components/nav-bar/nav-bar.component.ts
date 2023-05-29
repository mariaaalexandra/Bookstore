import { Component, OnInit } from '@angular/core';
// import {LoginService} from '../../services/login.service';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/Book';
import {NavigationExtras, Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private loggedIn = false;
  public keyword: string = "";
  private bookList: Book[] = [];
  authService: any;

  constructor(private bookService: BookService, private router: Router, private authS:AuthService) { }

  logout() {
    this.authS.logout();
    window.location.href = '/login'; // This will navigate to the login page
  }
  
  
  onSearchByTitle() {
    this.bookService.search(this.keyword).subscribe(
      res => {
        this.bookList = res;
        console.log(res);
        const navigationExtras: NavigationExtras ={
          queryParams: {
            "bookList": JSON.stringify(this.bookList)
          }
        };
        this.router.navigate(['/bookList'], navigationExtras);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {

  }

}
