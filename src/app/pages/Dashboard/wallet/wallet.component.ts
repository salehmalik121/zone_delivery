import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { DataService } from '../../../services/data-service.service';
import { FormsModule } from '@angular/forms';
import Stripe from 'stripe';
import { Router } from '@angular/router';
const stripe = new Stripe('sk_test_51OspW4BRDlXf1pUH8YYjCBRzqYaiOWKtcvAbZfnME8daUTbapXSkFmFXuVz4caMp6bjvtYthnJUDXGgiR8A4zRpK001LpFMz1o');
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
  imports: [MatIcon , MatTabsModule , FormsModule , MatTableModule],
  standalone: true,
})
export class WalletComponent {

  products:any[] = [];

  displayedColumns: string[] = [ 'name', 'price', 'actions'];


  constructor(private dataService : DataService , private router: Router){
    dataService.loadUserData().subscribe(response=>{
      console.log(response);
      this.balance = response.accountBalance
    })

    this.dataService.loadProductList().subscribe((response=>{
      this.products = response
    } 
    ))

  }
  balance: number = 0; // Example balance
  amount: number = 0;



  transact : any =  async() => {
    // Implement transaction logic
    const sAmount = this.amount * 100;
    console.log('Transmoney to account:', this.amount);
    const lineItems = [
      {
        price_data: {
          currency: 'usd',
          unit_amount: this.amount * 100, // Amount in cents (e.g., $10.00)
          product_data: {
            name: 'Top Up',
            description: 'Product Description',
          },
        },
        quantity: 1, // Quantity of this item
      },
      // Add additional line items if needed
    ];
    

    const id = sessionStorage.getItem('signature');
    const result:any = await stripe?.checkout.sessions.create({
      line_items : lineItems,
      mode: 'payment',
      success_url: `http://localhost:4200/success/${this.amount}/${id}`,
      cancel_url: 'http://localhost:4200/dashboard/wallet',
    });
    window.location.href = result.url;
    if (result.error) {
      console.error('Error redirecting to checkout:', result.error);
    }
  }


  buyProduct(pid : String){
    this.dataService.buyProduct(pid).subscribe(response=>{
      this.balance = response.NewBalance
    })
  }


}
