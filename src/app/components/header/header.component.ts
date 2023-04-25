import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private storageService: StorageService) {}

  currentDate = new Intl.DateTimeFormat('pt-BR').format(new Date());
  user: User | null = this.storageService.getUser();

  @Input() theme: 'dark' | 'light' = 'dark';
}
