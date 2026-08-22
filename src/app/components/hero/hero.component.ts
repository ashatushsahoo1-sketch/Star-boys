import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PujaDataService } from '../../services/puja-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  private pujaData = inject(PujaDataService);
  readonly committee = this.pujaData.getCommitteeInfo();

  scrollTo(targetId: string, event: Event): void {
    event.preventDefault();
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
