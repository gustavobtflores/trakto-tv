import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swiper from 'swiper';

interface Material {
  title: string;
  id: string;
  thumbs: {
    low: string;
  };
  pages: [];
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
})
export class MaterialComponent {
  constructor(private http: HttpClient) {}

  materialSlides: Material[] = [];

  ngOnInit() {
    var swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 32,
      freeMode: true,
    });

    this.http
      .get(
        'https://api.trakto.io/document?total_per_page=10&order_by=updated_at&order_orientation=desc',
        {
          headers: {
            Accept: '*/*',
          },
        }
      )
      .subscribe((res: any) => {
        const items = res.data.map(({ id, pages, thumbs, title }: Material) => {
          return {
            id,
            pages,
            thumbs,
            title,
          };
        });

        this.materialSlides = items;
      });
  }
}
