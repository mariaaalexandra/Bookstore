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
import { OrderComponent } from './components/order/order.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { RoleGuard } from './services/guard.service';
import { ViewComponent } from './components/view-book-admin/view.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tutorials', 
  component: TutorialsListComponent, 
  canActivate: [RoleGuard],
  data: { expectedRole: 'ROLE_USER' } },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', 
  component: DashboardComponent, 
  canActivate: [RoleGuard],
  data: { expectedRole: 'ROLE_USER' } },
  { path: 'bookList', component: BookListComponent, canActivate: [RoleGuard],
  data: { expectedRole: 'ROLE_USER' }},
  { path: 'viewBook/:id', component: ViewBookComponent, canActivate: [RoleGuard],
  data: { expectedRole: 'ROLE_USER' }},
  { path: 'view/:id', component: ViewComponent, canActivate: [RoleGuard],
  data: { expectedRole: 'ROLE_ADMIN' }},
  { path: 'shoppingCart', component: ShoppingCartComponent, canActivate: [RoleGuard],
  data: { expectedRole: 'ROLE_USER' }},
  { path: 'admin', 
  component: AdminBarComponent,
  canActivate: [RoleGuard],
  data: { expectedRole: 'ROLE_ADMIN' }},
  { path: 'admin/bookList', component: AdminBookListComponent, canActivate: [RoleGuard],
  data: { expectedRole: 'ROLE_ADMIN' }},
  { path: 'admin/addNewBook', component:AddNewBookComponent, canActivate: [RoleGuard],
  data: { expectedRole: 'ROLE_ADMIN' }},
  { path: 'cart/shoppingCart/:id', component:ShoppingCartComponent,canActivate: [RoleGuard],
  data: { expectedRole: 'ROLE_USER' }},
  { path: 'checkout', component: OrderComponent,canActivate: [RoleGuard],
  data: { expectedRole: 'ROLE_USER' }},
  { path: 'myProfile', component: MyProfileComponent,canActivate: [RoleGuard],
  data: { expectedRole: 'ROLE_USER' }},
  { path: 'editBook/:id', component: EditBookComponent,canActivate: [RoleGuard],
  data: { expectedRole: 'ROLE_ADMIN' }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }