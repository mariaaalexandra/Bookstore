import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { Router } from '@angular/router';
import { BookListService } from 'src/app/services/book-list.service';
import { RemoveBookService } from 'src/app/services/remove-book.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {
  public selectedBook: Book = new Book;
  public checked: boolean = false;
  public bookList: Book[] = new Array;
  public allChecked: boolean = false;
  public removeBookList: Book[] = new Array();

  constructor(public router: Router, public bookListService: BookListService,  private removeBookService: RemoveBookService, public dialog: MatDialog,) { }

  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/viewBook', this.selectedBook.id]);
  }

  openDialog(book: Book) {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(
      (result: any) => {
        console.log(result);
        if(result=="yes") {
          this.removeBookService.removeBook(book.id).subscribe(
            (res: any) => {
              console.log(res);
              this.getBookList();
            },
            (err: any) => {
              console.log(err);
            }
          );
        }
      }
    );
  }

  getBookList() {
    this.bookListService.getBookList().subscribe(
      res => {
        console.log(res);
        this.bookList = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateRemoveBookList(event: Event, book: Book) {
    const checked = (event.target as HTMLInputElement).checked;
    if(checked) {
      this.removeBookList.push(book);
    } else {
      this.removeBookList.splice(this.removeBookList.indexOf(book), 1);
      console.log(this.removeBookList);
    }
  }
  
  updateSelected(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.allChecked = true;
      this.removeBookList = this.bookList.slice();
      console.log(this.removeBookList);
    } else {
      this.allChecked = false;
      this.removeBookList = [];
    }
  }
  

  removeSelectedBooks() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if(result=="yes") {
          for (let book of this.removeBookList) {
            this.removeBookService.removeBook(book.id).subscribe(
              res => {
                this.getBookList();
              },
              err => {
                console.log(err);
              }
            );
          }
        }
      }
    );
  }

  ngOnInit() {
    this.getBookList();
    // console.log(this.getBookList);
  }

}


@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html'
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogResultExampleDialog>) {}
}
