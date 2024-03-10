import { Component } from '@angular/core';
import { SideBarComponent } from '../components/sidebar/sidebar.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { ProductDataService } from '../../../services/product-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SideBarComponent , NavBarComponent , RouterOutlet],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private productService : ProductDataService , private snackBar : MatSnackBar){
    this.listenForUpdate();
    this.listenForUpdate_delete();
    this.listenForUpdate_Product();
  }


  listenForUpdate(){
    this.productService.productAdded().subscribe((response=>{
      this.snackBar.open( `${response.message}`, 'Close', {
        duration: 3000, // Snackbar duration in milliseconds
        verticalPosition: 'top',
        horizontalPosition: 'end', // Position of the snackbar
      });
    }
    ))
  }

  listenForUpdate_delete(){
    this.productService.productDeleted().subscribe((response=>{
      this.snackBar.open( `${response.message}`, 'Close', {
        duration: 3000, // Snackbar duration in milliseconds
        verticalPosition: 'top',
        horizontalPosition: 'end', // Position of the snackbar
      });
    }
    ))
  }

  listenForUpdate_Product(){
    this.productService.productUpdated().subscribe((response=>{
      this.snackBar.open( `${response.message}`, 'Close', {
        duration: 3000, // Snackbar duration in milliseconds
        verticalPosition: 'top',
        horizontalPosition: 'end', // Position of the snackbar
      });
    }
    ))
  }
}
