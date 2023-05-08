import {Component, OnInit, ViewChild} from '@angular/core';
import {BookService} from '../../services/book.service';
import {AppConst} from '../../constants/app.const';
import {Book} from '../../models/Book';
// import {Subject} from 'rxjs/Subject';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public serverPath = AppConst.serverPath;
  public bookList: Book[] | undefined;
  public selectedBook: Book | undefined;
  // // dtTrigger: Subject<any> = new Subject();


  // constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  // onSelect(book: Book) {
  //   this.selectedBook = book;
  //   this.router.navigate(['viewBook', this.selectedBook.id]);
  // }

  ngOnInit() {
    // this.route.queryParams.subscribe( params => {
    //   if (params['bookList']) {
    //     this.bookList = JSON.parse(params['bookList']);
    //   } else {
    //     this.bookService.getBookList().subscribe(
    //       res => {
    //         console.log(res);
    //         this.bookList = res;
    //         // this.dtTrigger.next();
    //       },
    //       error => {
    //         console.log(error);
    //       }
    //     );
    //   }
    //   }
    // );
  }


}
