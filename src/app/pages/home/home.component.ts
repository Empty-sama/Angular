import { Component } from '@angular/core';
import { CardComponent } from '../../components';
import { cardData } from '../../constants/data';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cards = cardData;
}
