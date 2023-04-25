import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './auth/login/login.component';
 import { SignUpComponent } from './auth/signin/sign-up.component';
import { RefreshComponent } from './refresh/refresh.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  // ... other routes
  { path: 'dashboard', component: DashboardComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    TutorialsListComponent,
    LoginComponent,
     SignUpComponent,
     RefreshComponent,
     DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
