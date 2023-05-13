import { Component, OnInit } from '@angular/core';
// import {LoginService} from '../../services/login.service';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/Book';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private loggedIn = false;
  public keyword: string = "";
  private bookList: Book[] = [];

  constructor(private bookService: BookService, private router: Router) { }

  logout() {
    // this.loginService.logout().subscribe(
    //   res => {
    //     location.reload();
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
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
    // this.loginService.checkSessoin().subscribe(
    //   res => {
    //     this.loggedIn = true;
    //   },
    //   error => {
    //     this.loggedIn = false;
    //   }
    // );
  }

}
