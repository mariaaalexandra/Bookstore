import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/book.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './auth/login/login.component';
 import { SignUpComponent } from './auth/signin/sign-up.component';
import { RefreshComponent } from './refresh/refresh.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AdminBarComponent } from './components/admin-bar/admin-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
const routes: Routes = [
  // ... other routes
  { path: 'dashboard', component: DashboardComponent },
];
import { ViewBookComponent } from './components/view-book/view-book.component';
import { BookListService } from './services/book-list.service';
import { CommonModule } from '@angular/common';
import { AdminBookListComponent } from './components/admin-book-list/admin-book-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RemoveBookService } from './services/remove-book.service';
import { UploadImageService } from './services/upload-image.service';
import { AddBookService } from './services/add-book.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TutorialsListComponent,
    LoginComponent,
     SignUpComponent,
     RefreshComponent,
     DashboardComponent,
     BookListComponent,
     ViewBookComponent,
     NavBarComponent,
     ShoppingCartComponent,
      AdminBarComponent,
      AdminBookListComponent,
      AddNewBookComponent,
      // UserShippingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatDialogModule,
    RouterModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    NgbModule
  ],
  providers: [UserService, BookService,BookListService, RemoveBookService,UploadImageService,AddBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
