import { formatDate, registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { Component } from '@angular/core';
import { Material } from 'src/app/interfaces/material';
import { DataService } from 'src/app/services/data.service';
import Swiper, { Navigation } from 'swiper';

registerLocaleData(localePT, 'pt-BR');

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
})
export class MaterialComponent {
  constructor(private dataService: DataService) {}

  materialSlides: Material[] = [];
  newestDate: string = '';
  oldestDate: string = '';

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
      const items = res.data.map(({ id, pages, thumbs, title, updated_at }) => {
        return {
          id,
          pages,
          thumbs,
          title,
          updated_at,
        };
      });

      const dates = items.map((item) => item.updated_at || '').sort();
      this.newestDate = formatDate(dates[dates.length - 1], 'dd/MM', 'pt-BR');
      this.oldestDate = formatDate(dates[0], 'dd/MM', 'pt-BR');

      this.materialSlides = items;
    });
  }
}
