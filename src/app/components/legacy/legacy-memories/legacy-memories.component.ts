import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PujaDataService } from '../../../services/puja-data.service';
import { LightboxService } from '../../../services/lightbox.service';
import { DecorativeDividerComponent } from '../../../shared/decorative-divider/decorative-divider.component';

@Component({
  selector: 'app-legacy-memories',
  standalone: true,
  imports: [CommonModule, DecorativeDividerComponent],
  templateUrl: './legacy-memories.component.html',
  styleUrls: ['./legacy-memories.component.scss']
})
export class LegacyMemoriesComponent {
  private pujaData = inject(PujaDataService);
  private lightbox = inject(LightboxService);

  readonly memories = this.pujaData.getLegacyMemories();

  openMemory(mem: any): void {
    const list = this.memories.map(m => ({
      src: m.image,
      title: `${m.year}: ${m.title}`,
      year: m.year,
      description: m.caption
    }));

    this.lightbox.open({
      src: mem.image,
      title: `${mem.year}: ${mem.title}`,
      year: mem.year,
      description: mem.caption
    }, list);
  }
}
