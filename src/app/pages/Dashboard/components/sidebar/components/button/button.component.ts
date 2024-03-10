import { Component,Input  } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatIconModule , RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {


  constructor(private router: Router){}
  @Input() ButtonName: any;
  @Input() Icon: any;
  @Input() route: any;


  onRoute() : void{
    console.log(this.route);
    this.router.navigateByUrl(`/dashboard${this.route}`)
  }
}
