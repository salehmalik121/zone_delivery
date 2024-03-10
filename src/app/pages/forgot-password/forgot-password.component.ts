import { Component , NgModule   } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import { DataService } from '../../services/data-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule , CommonModule , MatInputModule , MatFormField],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  email: string = '';
  otp: string = '';
  isNextDisabled: boolean = true;
  isOTPVisible : boolean = false;
  OTPSectionVisibilty = true;


  constructor(private dataService : DataService , private snackBar : MatSnackBar , private router: Router) { }

  checkEmailValidity(): void {
    // Add email validation logic here
    // For simplicity, just check if email is not empty
    this.isNextDisabled = !this.email.trim().length;
  }
 

  onNextClick(): void {
    console.log('Next button clicked');
    this.isOTPVisible = true;
    this.dataService.sendOTP(this.email).subscribe(response=>{
      console.log(response);
    })
  }

  onSubmit(): void {
    this.dataService.verifyOTP(this.email , this.otp).subscribe(response=>{
      this.OTPSectionVisibilty = false;
    } , error=>{
      this.snackBar.open(`${error.error.message}`, 'Close', {
        duration: 3000, // Snackbar duration in milliseconds
        verticalPosition: 'top',
        horizontalPosition: 'end', // Position of the snackbar
      });
    })
  }



  password: string = '';
  confirmPassword: string = '';
  passwordsMatch: boolean = false;


  checkPasswordMatch(): void {
    this.passwordsMatch = this.password === this.confirmPassword;
  }

  submit(): void {
    this.dataService.changePassword(this.email , this.password).subscribe(response=>{
      this.router.navigateByUrl("signin")
    } , error=>{
      this.snackBar.open(`${error.error.message}`, 'Close', {
        duration: 3000, // Snackbar duration in milliseconds
        verticalPosition: 'top',
        horizontalPosition: 'end', // Position of the snackbar
      });
    })
  }
}
