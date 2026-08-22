import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PujaDataService } from '../../services/puja-data.service';
import { DecorativeDividerComponent } from '../../shared/decorative-divider/decorative-divider.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, DecorativeDividerComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  private pujaData = inject(PujaDataService);
  readonly about = this.pujaData.getAboutContent();
}
