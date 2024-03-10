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
  templateUrl: './dialogbox.component.html',
  styleUrl: './dialogbox.component.css'
})
export class DialogBoxComponent {

  constructor( private socket: ProductDataService ,  protected productService: ProductDataService , @Inject(MAT_DIALOG_DATA) public data: any){

  }

  onOk (){
    this.socket.updateProduct(this.data);
  }
}
