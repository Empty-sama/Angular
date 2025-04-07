import { Component } from '@angular/core';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';

@Component({
  selector: 'app-about',
  imports: [CdkMenu, CdkMenuItem, CdkMenuTrigger],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss'
})
export class AboutPage {
  
}
