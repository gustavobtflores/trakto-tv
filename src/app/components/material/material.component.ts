import { Component } from '@angular/core';
import { Material } from 'src/app/interfaces/material';
import { DataService } from 'src/app/services/data.service';
import Swiper, { Navigation } from 'swiper';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
})
export class MaterialComponent {
  constructor(private dataService: DataService) {}

  materialSlides: Material[] = [];

  ngOnInit() {
    Swiper.use([Navigation]);

    var swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 32,
      freeMode: true,
      navigation: {
        nextEl: '.content__box-controllers--next',
        prevEl: '.content__box-controllers--prev',
      },
    });

    this.dataService.getMaterials().subscribe((res) => {
      console.log(res);
      const items = res.data.map(({ id, pages, thumbs, title }) => {
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
