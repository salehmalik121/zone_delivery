import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataService } from '../../../services/product-data.service';
import { DataService } from '../../../services/data-service.service';
import { FormsModule } from '@angular/forms';
import { DialogBoxComponent } from './compoenents/dialogbox/dialogbox.component';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  imports: [FormsModule],
  standalone: true,
})
export class EditProductComponent implements OnInit {
  product: any = { id: '', name: '', description: '', price: 0 };

  constructor(private route: ActivatedRoute, private router: Router, private productService: DataService , private socket: ProductDataService , public dialog: MatDialog ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.loadProductById(productId).subscribe(product => {
        this.product = product;
      });
    }
  }

  onSubmit(): void {
    
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: this.product // Pass your data to the dialog component
    });
  };
  
}


