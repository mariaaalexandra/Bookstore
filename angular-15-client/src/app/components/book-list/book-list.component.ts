import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { AppConst } from '../../constants/app.const';
import { Book } from '../../models/Book';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  public bookList: Book[] = [];
  private selectedBook: Book | undefined;
  dtTrigger: Subject<any> = new Subject();


  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['viewBook', this.selectedBook.id]);
  }

  ngOnInit() {
    console.log("MIU");
    this.http.get<Book[]>('http://localhost:8080/book/bookList')
      .subscribe({
        next: (res) => {
          console.log(res);
          this.bookList = res;
          this.dtTrigger.next(this.bookList);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
  

}