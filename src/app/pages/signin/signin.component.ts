import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  imports: [
    FormsModule,
    CommonModule
  ],
  standalone: true
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  constructor(private auth: AuthService , private router: Router , private snackBar : MatSnackBar){
    if(sessionStorage.getItem("signature") !== null && sessionStorage.getItem("signature") !== undefined){
      console.log("called")
      router.navigateByUrl("dashboard")
    }
  }

  signIn() {
    
    this.auth.isAuthenticatedUser(this.email , this.password).subscribe(
      response =>{
        if(response._id){
          sessionStorage.setItem('signature', response._id);
        this.router.navigateByUrl("dashboard");
        }else{
          this.snackBar.open('Invalid Email or password', 'Close', {
            duration: 3000, // Snackbar duration in milliseconds
            verticalPosition: 'top',
            horizontalPosition: 'end', // Position of the snackbar
          });
        }
        
      } , error =>{
        this.snackBar.open('An error occurred', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
        });
      }
    )


  }



  signup(){
    this.router.navigateByUrl("/signup")
  }

  forgotPassword(){
    this.router.navigateByUrl("/forgotpassword")
  }
}
