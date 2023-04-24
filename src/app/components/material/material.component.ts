import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
})
export class MaterialComponent {
  constructor(private http: HttpClient) {}

  materialSlides = [
    {
      title: 'Aula 1: Fono-ortografia',
      amount: 5,
      image: 'https://picsum.photos/200',
    },
    {
      title: 'Aula 1: Fono-ortografia',
      amount: 5,
      image: 'https://picsum.photos/200',
    },
    {
      title: 'Aula 1: Fono-ortografia',
      amount: 5,
      image: 'https://picsum.photos/200',
    },
    {
      title: 'Aula 1: Fono-ortografia',
      amount: 5,
      image: 'https://picsum.photos/200',
    },
    {
      title: 'Aula 1: Fono-ortografia',
      amount: 5,
      image: 'https://picsum.photos/200',
    },
    {
      title: 'Aula 1: Fono-ortografia',
      amount: 5,
      image: 'https://picsum.photos/200',
    },
    {
      title: 'Aula 1: Fono-ortografia',
      amount: 5,
      image: 'https://picsum.photos/200',
    },
    {
      title: 'Aula 1: Fono-ortografia',
      amount: 5,
      image: 'https://picsum.photos/200',
    },
  ];

  ngOnInit() {
    var swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 32,
      freeMode: true,
    });

    this.http
      .get(
        'https://api.trakto.io/document?total_per_page=10&order_by=title&order_orientation=desc'
      )
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
