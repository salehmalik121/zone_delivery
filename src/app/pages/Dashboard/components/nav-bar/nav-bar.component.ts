import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { DataService } from '../../../../services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatIconModule, MatMenuModule,MatButtonModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  userData = {
    firstName : "",
  }
  constructor(private dataService : DataService , private router : Router){
    this.dataService.loadUserData().subscribe(
      response=>{
        this.userData=response;
        console.log(this.userData)
      },
      error=>{
        console.log(error)
      }
    )
  }


  onLogoutClicked(): void{
    sessionStorage.removeItem("signature")
    this.router.navigateByUrl("/signin")
  }

}
