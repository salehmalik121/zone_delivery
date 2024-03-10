import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { SocketIoConfig , SocketIoModule} from 'ngx-socket-io';
import { ProductService } from '../../../services/product.service';
import { ProductDataService } from '../../../services/product-data.service';
import { DataService } from '../../../services/data-service.service';
import { RouteReuseStrategy, Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
// Import Product interface


import {DialogBoxComponent} from './componenets/dialog-box/dialog-box.component'

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };
// product.interface.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css'],
  imports: [MatTableModule , MatIcon , MatButton ],
  providers: [SocketIoModule],
  standalone: true
})
export class ViewTableComponent {

  constructor(private productService : ProductDataService , private dataService : DataService , private route: Router , public dialog: MatDialog ){

    this.dataService.loadProductList().subscribe((response=>{
      this.products = response
    } 
    ))

    this.updateList();
    this.productDeleted();
    this.updateProduct();

  }

  products:any[] = [];

  displayedColumns: string[] = [ 'name', 'description', 'price', 'actions'];



  productDeleted(){
    this.productService.productDeleted().subscribe(res=>{
      this.dataService.loadProductList().subscribe((response=>{
        this.products = response
      } ))
    })
  }

  updateList(){
    this.productService.productAdded().subscribe((response=>{
      this.products = [...this.products , response.savedData]
    }
    ))
  }


  updateProduct(){
    this.productService.productUpdated().subscribe((response=>{
      this.products = response.newList;
    }
    ))
  }

  viewProduct(product: any) {
    
    
    this.route.navigateByUrl(`/dashboard/viewproduct/${product._id}`)

  }

  editProduct(product: any) { 
    console.log(product)
      this.route.navigateByUrl(`/dashboard/edit/${product._id}`)
  }




  deleteProduct(product: any) {

    // this.dialog.open(DialogBoxComponent, {
    //   width: '250px',
    // });


    // this.productService.deleteProduct(product._id);
    // let filteredArray = this.products.filter(item => item._id != product._id);
    // console.log(filteredArray);
    // this.products=filteredArray;


    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: product // Pass your data to the dialog component
    });
  }


  ToAddProduct(){
    this.route.navigateByUrl("/dashboard/addProduct")
  }

}





