import { Component, Input } from '@angular/core';

interface Slide {
  id: string;
  title: string;
  thumbs: {
    low: string;
  };
  pages: string[] | null;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() slide: Slide = {
    id: '',
    title: '',
    thumbs: {
      low: '',
    },
    pages: [],
  };
}
