import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentDate = new Intl.DateTimeFormat('pt-BR').format(new Date());

  @Input() theme: 'dark' | 'light' = 'dark';
}
