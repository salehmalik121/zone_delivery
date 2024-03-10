import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data-service.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent {
  pid : any = "" ;
  product : any = {
    name : " ",
    price: "",
    description: "",
  };
  constructor(private route : ActivatedRoute , private dataService : DataService){
    this.route.params.subscribe(params=>{
      this.pid = params['pid'];
    })



    dataService.loadProductDetails(this.pid).subscribe(response=>{
      this.product = response;
    })
  }
}
