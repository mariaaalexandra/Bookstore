import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute, Router} from '@angular/router';
import { GetBookService } from '../../services/get-book.service';
import { Book} from '../../models/Book';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public book: Book = new Book();
  public bookId!: number;

  constructor(public getBookService: GetBookService, public route: ActivatedRoute, public router: Router) {}

    onSelect(book: Book) {
    this.router.navigate(['/editBook', this.book.id]);
    }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.bookId = Number.parseInt(params['id']);
    });

    this.getBookService.getBook(this.bookId).subscribe(
      res => {
      this.book = res;
    },
    error => {
      console.log(error);
    }
    );
  }

}
