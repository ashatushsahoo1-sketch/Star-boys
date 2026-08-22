import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PujaDataService } from '../../../services/puja-data.service';
import { DecorativeDividerComponent } from '../../../shared/decorative-divider/decorative-divider.component';

@Component({
  selector: 'app-past-events',
  standalone: true,
  imports: [CommonModule, DecorativeDividerComponent],
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.scss']
})
export class PastEventsComponent {
  private pujaData = inject(PujaDataService);
  readonly pastEvents = this.pujaData.getPastEvents();

  scrollToGallery(event: Event): void {
    event.preventDefault();
    const el = document.getElementById('gallery');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
