import { Component, Input } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private storageService: StorageService) {}

  currentDate = new Intl.DateTimeFormat('pt-BR').format(new Date());

  @Input() theme: 'dark' | 'light' = 'dark';

  user: any = {};

  ngOnInit(): void {
    this.user = this.storageService.getUser();
    console.log(this.storageService.getUser());
    console.log(this.user);
  }
}
