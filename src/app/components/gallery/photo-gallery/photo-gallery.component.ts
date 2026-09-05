import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PujaDataService } from '../../../services/puja-data.service';
import { LightboxService } from '../../../services/lightbox.service';
import { GalleryItem } from '../../../models/gallery.model';
import { DecorativeDividerComponent } from '../../../shared/decorative-divider/decorative-divider.component';

interface YearFilterOption {
  year: string;
  count: number;
}

interface YearGroup {
  year: string;
  items: GalleryItem[];
}

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [CommonModule, DecorativeDividerComponent],
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent {
  private pujaData = inject(PujaDataService);
  private lightbox = inject(LightboxService);

  readonly allItems = this.pujaData.getGalleryItems();
  readonly selectedYear = signal<string>('all');

  readonly availableYears = computed<YearFilterOption[]>(() => {
    const yearMap = new Map<string, number>();
    for (const item of this.allItems) {
      yearMap.set(item.year, (yearMap.get(item.year) || 0) + 1);
    }

    const yearsWithPhotos = Array.from(yearMap.keys())
      .filter(year => (yearMap.get(year) || 0) > 0)
      .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
      .map(y => ({ year: y, count: yearMap.get(y)! }));

    return [
      { year: 'all', count: this.allItems.length },
      ...yearsWithPhotos
    ];
  });

  readonly filteredItems = computed<GalleryItem[]>(() => {
    const yr = this.selectedYear();
    if (yr === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => item.year === yr);
  });

  readonly yearGroups = computed<YearGroup[]>(() => {
    const items = this.filteredItems();
    const map = new Map<string, GalleryItem[]>();
    for (const item of items) {
      if (!map.has(item.year)) {
        map.set(item.year, []);
      }
      map.get(item.year)!.push(item);
    }

    // Ascending order (2004 to 2026)
    const sortedYears = Array.from(map.keys()).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
    return sortedYears.map(year => ({
      year,
      items: map.get(year)!
    }));
  });

  setYear(year: string): void {
    this.selectedYear.set(year);
  }

  resetFilters(): void {
    this.selectedYear.set('all');
  }

  openLightbox(item: GalleryItem): void {
    const list = this.filteredItems().map(i => ({
      src: i.image,
      title: i.title,
      year: i.year,
      category: i.categoryLabel,
      description: i.description
    }));

    this.lightbox.open({
      src: item.image,
      title: item.title,
      year: item.year,
      category: item.categoryLabel,
      description: item.description
    }, list);
  }
}

