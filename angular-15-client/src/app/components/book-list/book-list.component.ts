import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { AppConst } from '../../constants/app.const';
import { Book } from '../../models/Book';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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
  dtTrigger: Subject<void> = new Subject<void>();
  public keyword: string = "";
  public category: string = "";
  sortDirection: string = 'asc';  // set initial sort direction
  sortProperties: string[] = [];

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['viewBook', this.selectedBook.id]);
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

  onFilterByCategory() {
    this.bookService.filterByCategory(this.category).subscribe(
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
    // this.route.queryParams.subscribe( params => {
    //   if (params['bookList']) {
    //     this.bookList = JSON.parse(params['bookList']);
    //   } else {
    //     this.bookService.getBookList().subscribe(
    //       res => {
    //         console.log(res);
    //         this.bookList = res;
    //         this.dtTrigger.next();
    //       },
    //       error => {
    //         console.log(error);
    //       }
    //     );
    //   }
    //   }
    // );
    this.getSortedBooks();
  }
  

  getSortedBooks() {
    const sortParameters = this.sortProperties.join(',');
    this.bookService.getSortedBooks(sortParameters).subscribe(
      data => {
        this.bookList = data;
        const navigationExtras: NavigationExtras = {
          queryParams: {
            "bookList": JSON.stringify(this.bookList)
          }
        };
        this.router.navigate(['/bookList'], navigationExtras);
      },
      error => console.log(error)
    );
  }

onSortChange(event: any) {
    const value = event.target.value;
    this.sortProperties = value ? value.split(',') : [];
    this.getSortedBooks();
}
}