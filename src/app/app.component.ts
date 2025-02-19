import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { cardData } from '../data';

@Component({
  selector: 'app-root',
  imports: [CardComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  cards =cardData;
}
