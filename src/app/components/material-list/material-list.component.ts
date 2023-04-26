import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Material } from 'src/app/interfaces/material';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss'],
})
export class MaterialListComponent {
  constructor(private dataService: DataService) {}

  materialSlides: Material[] = [];

  ngOnInit() {
    this.dataService.getMaterials().subscribe((res) => {
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
