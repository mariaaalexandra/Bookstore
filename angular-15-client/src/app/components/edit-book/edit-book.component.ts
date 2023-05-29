import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Book } from '../../models/Book';
import { EditBookService } from '../../services/edit-book.service';
import { UploadImageService } from '../../services/upload-image.service';
import { GetBookService } from 'src/app/services/get-book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  public bookId!: number;
  public book: Book = new Book();
  public bookUpdated!: boolean;

  constructor(public editBookService: EditBookService, public getBookService: GetBookService, public uploadImageService: UploadImageService,
              public route: ActivatedRoute, public router: Router) {}


    onSubmit() {
      this.editBookService.sendBook(this.book).subscribe(
        data => {
          this.uploadImageService.modify(JSON.parse(JSON.stringify(data)).id);
          this.bookUpdated = true;
        },
        error => {
          console.log(error);
        }
      );
    }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.bookId = Number.parseInt(params['id']);
    });

    this.getBookService.getBook(this.bookId).subscribe(
      (      res: Book) => {
        this.book = res;
      },
      (      error: any) => {
        console.log(error);
      }
    );
  }

}
