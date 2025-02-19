import { Component, computed, input, Input, OnInit } from '@angular/core';


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

export interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}