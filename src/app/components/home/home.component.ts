import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  pages = [
    {
      identifier: 'material',
      title: 'Material didático',
      image: 'material.png',
      route: '/platform/material',
    },
    {
      identifier: 'quiz',
      title: 'Quiz',
      image: 'quiz.png',
      route: null,
    },
    {
      identifier: 'drawing',
      title: 'Desenho',
      image: 'drawing.png',
      route: null,
    },
    {
      identifier: 'youtube',
      title: 'Youtube',
      image: 'youtube.png',
      route: null,
    },
  ];
}
