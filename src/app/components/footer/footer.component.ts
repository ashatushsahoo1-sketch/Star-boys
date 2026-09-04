import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PujaDataService } from '../../services/puja-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private pujaData = inject(PujaDataService);
  readonly committee = this.pujaData.getCommitteeInfo();
  readonly dev = this.pujaData.getDeveloperInfo();

  readonly quickLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About STAR BOYS', target: 'about' },
    { label: 'Upcoming Puja 2026', target: 'events' },
    { label: 'Program Schedule', target: 'schedule' },
    { label: 'Historical Legacy', target: 'legacy' },
    { label: 'Photo Gallery', target: 'gallery' },
    { label: 'Committee Members', target: 'committee' },
    { label: 'Developer Details', target: 'developer' }
  ];

  scrollTo(targetId: string, event: Event): void {
    event.preventDefault();
    const el = document.getElementById(targetId);
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
