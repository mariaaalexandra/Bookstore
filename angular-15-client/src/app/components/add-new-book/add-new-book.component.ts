import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/Book';
import { AddBookService} from '../../services/add-book.service';
import { UploadImageService} from '../../services/upload-image.service';


@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  public newBook: Book = new Book();
  public bookAdded: boolean = false;
  color = 'primary'; // for mat-slide-toggle color
  checked = true; // for mat-slide-toggle checked state
  disabled = false; // for mat-slide-toggle disabled state

  constructor(public addBookService: AddBookService, public uploadImageService: UploadImageService) {}

  onSubmit() {
    this.addBookService.sendBook(this.newBook).subscribe(
      (res: any) => {
        this.uploadImageService.upload(res.id);
        this.bookAdded = true;
        this.newBook = new Book();
        this.newBook.active = true;
        this.newBook.category = "Management";
        this.newBook.language = "Ukrainian";
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  

  ngOnInit() {
    this.bookAdded = false;
    this.newBook.active = true;
    this.newBook.category = "Management";
    this.newBook.language = "Ukrainian";
  }

}
