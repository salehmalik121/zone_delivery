import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  imports: [CommonModule , FormsModule , HttpClientModule],
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

   constructor( private dataService: DataService , private route: Router){}

  userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  confirmPassword = '';

  signup() {
    this.dataService.createUser(this.userData).subscribe(
      response=>{
        console.log(response)
        this.route.navigateByUrl("/signin")
      },
      error=>{
        console.log(error)
      }
      
    );
  }
}
