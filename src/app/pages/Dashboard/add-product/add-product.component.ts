import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { ProductDataService } from '../../../services/product-data.service';



interface Product {
  name: string;
  description: string;
  price: any;
}
@Component({
  selector: 'app-product-form',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  imports: [FormsModule ],
  standalone: true,
})
export class AddProductComponent {
  product: Product = {
    name: '',
    description: '',
    price: null
  };

  constructor(private productService: ProductDataService ){
  }
  

  submitForm() {

    this.productService.addProduct(this.product);


    this.product = {
      name: '',
      description: '',
      price: null
    };
  }


}
