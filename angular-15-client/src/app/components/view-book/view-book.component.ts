import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {AppConst} from '../../constants/app.const';
import {Book} from '../../models/Book';
import {ActivatedRoute, Params} from '@angular/router';
// import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})

export class ViewBookComponent implements OnInit {
  public serevrPath = AppConst.serverPath;
  public bookId: number = -1;
  public book: Book = new Book();
  public quantity = -1;
  public notEnoughStock: boolean | undefined;
  public addBookSuccess: boolean | undefined;
  public numberList: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  // onAddToCart() {
  //   // this.cartService.addItem(this.bookId, this.quantity).subscribe(
  //   //   res => {
  //   //     console.log(res);
  //   //     this.addBookSuccess = true;
  //   //   },
  //   //   error => {
  //   //     console.log(error);
  //   //     this.addBookSuccess = false;
  //   //     this.notEnoughStock = true;
  //   //   }
  //   // );
  // }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.bookId = Number.parseInt(params['id']);
    });

    this.bookService.getBook(this.bookId).subscribe(
      res => {
        this.book = res;
      },
      error => {
        console.log(error);
      }
    );
  }

}
