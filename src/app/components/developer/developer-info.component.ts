import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PujaDataService } from '../../services/puja-data.service';
import { DecorativeDividerComponent } from '../../shared/decorative-divider/decorative-divider.component';

@Component({
  selector: 'app-developer-info',
  standalone: true,
  imports: [CommonModule, DecorativeDividerComponent],
  templateUrl: './developer-info.component.html',
  styleUrls: ['./developer-info.component.scss']
})
export class DeveloperInfoComponent {
  private pujaData = inject(PujaDataService);
  readonly dev = this.pujaData.getDeveloperInfo();
  imageError = false;

  onImageError() {
    this.imageError = true;
  }
}
