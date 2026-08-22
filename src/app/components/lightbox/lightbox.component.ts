import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxService } from '../../services/lightbox.service';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent {
  readonly lightbox = inject(LightboxService);

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (!this.lightbox.isOpen()) return;

    if (event.key === 'Escape') {
      this.lightbox.close();
    } else if (event.key === 'ArrowRight') {
      this.lightbox.next();
    } else if (event.key === 'ArrowLeft') {
      this.lightbox.prev();
    }
  }
}
