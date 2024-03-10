import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {ButtonComponent} from "./components/button/button.component"
import { MatTreeModule } from '@angular/material/tree';






@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule , MatListModule , MatIconModule , ButtonComponent , MatTreeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SideBarComponent {
  isSidebarOpen: boolean = true;

  toggleSidebar(): void {
    console.log(this.isSidebarOpen)
    this.isSidebarOpen = !this.isSidebarOpen;
  }




}

