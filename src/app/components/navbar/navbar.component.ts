import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {CdkMenu, CdkMenuTrigger} from '@angular/cdk/menu';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CdkMenu, CdkMenuTrigger],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
}

