import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maha-bhog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maha-bhog.component.html',
  styleUrls: ['./maha-bhog.component.scss']
})
export class MahaBhogComponent {
  readonly todaysBhog = signal({
    name: 'Khichdi, Dalma & Rasagola',
    offeredBy: 'Star Boys Laxmi Puja Committee',
    image: 'assets/images/bhog/maha-bhog.jpg'
  });
}
