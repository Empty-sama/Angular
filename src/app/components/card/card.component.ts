import { Component, computed, input, OnInit } from '@angular/core';
import { Card } from '../../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  card = input.required<Card>();

  cardIndex = input<number>();

  transform_index = computed(() => {
    return this.cardIndex() * 100;
  });

  ngOnInit() {

  }
}
