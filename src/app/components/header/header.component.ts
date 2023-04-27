import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private storageService: StorageService,
    private route: ActivatedRoute
  ) {}

  currentDate = new Intl.DateTimeFormat('pt-BR').format(new Date());
  user: User | null = this.storageService.getUser();
  isHomeCurrentRoute =
    this.route.snapshot.routeConfig?.path === 'platform/home';

  @Input() theme: 'dark' | 'light' = 'dark';
}
