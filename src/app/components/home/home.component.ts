import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentDate = new Intl.DateTimeFormat('pt-BR').format(new Date());
  pages = [
    {
      identifier: 'material',
      title: 'Material didático',
      image: 'material.png',
      route: '/material',
    },
    {
      identifier: 'quiz',
      title: 'Quiz',
      image: 'quiz.png',
      route: '',
    },
    {
      identifier: 'drawing',
      title: 'Desenho',
      image: 'drawing.png',
      route: '',
    },
    {
      identifier: 'youtube',
      title: 'Youtube',
      image: 'youtube.png',
      route: '',
    },
  ];
}
