import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PujaDataService } from '../../../services/puja-data.service';
import { LightboxService, LightboxImage } from '../../../services/lightbox.service';
import { DecorativeDividerComponent } from '../../../shared/decorative-divider/decorative-divider.component';

@Component({
  selector: 'app-legacy-timeline',
  standalone: true,
  imports: [CommonModule, DecorativeDividerComponent],
  templateUrl: './legacy-timeline.component.html',
  styleUrls: ['./legacy-timeline.component.scss']
})
export class LegacyTimelineComponent {
  private pujaData = inject(PujaDataService);
  private lightbox = inject(LightboxService);

  readonly legacyItems = this.pujaData.getLegacyItems();

  openImage(item: any): void {
    if (!item?.image) return;

    const current: LightboxImage = {
      src: item.image,
      title: item.year + ': ' + item.title,
      year: item.year,
      description: item.description
    };

    const allImages: LightboxImage[] = this.legacyItems.map((i: any) => ({
      src: i.image,
      title: i.year + ': ' + i.title,
      year: i.year,
      description: i.description
    }));

    this.lightbox.open(current, allImages);
  }
}