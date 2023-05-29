import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private currentUser: any; // adjust this to your User model
  public role: any;
  
  constructor() {
    this.currentUser = null; // Initialize currentUser to null
    this.role = localStorage.getItem("role");
  }
  
  logout() {
    // Clear user details on logout
    localStorage.removeItem("role");
    this.role = null;
    // Clear other data here as needed
  }
  

  // Method to return the user role
  getUserRole() {
    return this.role;
  }
  
  // Method to check if the user is authenticated
  isAuthenticated() {
    return this.currentUser != null;
  }

}
