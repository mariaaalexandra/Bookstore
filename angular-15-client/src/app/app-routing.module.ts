import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/signin/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AdminBarComponent } from './components/admin-bar/admin-bar.component';
import { AdminBookListComponent } from './components/admin-book-list/admin-book-list.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bookList', component: BookListComponent},
  { path: 'viewBook/:id', component: ViewBookComponent},
  { path: 'shoppingCart', component: ShoppingCartComponent},
  { path: 'admin', component: AdminBarComponent},
  { path: 'admin/bookList', component: AdminBookListComponent},
  { path: 'admin/addNewBook', component:AddNewBookComponent},
  { path: 'cart/shoppingCart/:id', component:ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }