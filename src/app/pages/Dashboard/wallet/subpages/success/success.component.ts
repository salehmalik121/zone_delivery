import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataService } from '../../../../../services/product-data.service';
import { DataService } from '../../../../../services/data-service.service';


@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {



  constructor(private route: ActivatedRoute , private router : Router , private socket : ProductDataService ,) { 

    setTimeout(() => {
      this.router.navigate(['/dashboard/wallet']); // Replace '/dashboard' with the desired URL
    }, 5000);
    this.route.params.subscribe(params => {

      socket.loadAccount(params);
      console.log(params)

      

    });


  }

}
