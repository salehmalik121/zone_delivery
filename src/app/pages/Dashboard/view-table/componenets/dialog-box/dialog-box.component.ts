import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ProductDataService } from '../../../../../services/product-data.service';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [MatDialogActions , MatDialogContent , MatDialogClose , MatDialogTitle ],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.css'
})
export class DialogBoxComponent {

  product : any  ={};
  constructor(protected productService: ProductDataService , @Inject(MAT_DIALOG_DATA) public data: any){

    console.log(data);
    this.product = data;
  }

  onOk (){
    this.productService.deleteProduct(this.product._id);
    window.location.reload();
  }
}
