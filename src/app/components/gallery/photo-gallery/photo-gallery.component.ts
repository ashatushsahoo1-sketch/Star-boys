import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PujaDataService } from '../../../services/puja-data.service';
import { LightboxService } from '../../../services/lightbox.service';
import { GalleryItem, GalleryCategory } from '../../../models/gallery.model';
import { DecorativeDividerComponent } from '../../../shared/decorative-divider/decorative-divider.component';

interface FilterOption {
  id: GalleryCategory;
  label: string;
  icon: string;
}

interface YearFilterOption {
  year: string;
  count: number;
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
  readonly selectedCategory = signal<GalleryCategory>('all');
  readonly selectedYear = signal<string>('all');

  readonly categories: FilterOption[] = [
    { id: 'all', label: 'All Photos', icon: 'fa-solid fa-border-all' },
    { id: 'puja', label: 'Puja & Rituals', icon: 'fa-solid fa-om' },
    { id: 'decoration', label: 'Decoration & Pandal', icon: 'fa-solid fa-wand-magic-sparkles' },
    { id: 'cultural', label: 'Cultural Nights', icon: 'fa-solid fa-masks-theater' },
    { id: 'community', label: 'Community & Seva', icon: 'fa-solid fa-hands-holding-heart' },
    { id: 'memories', label: 'Golden Memories', icon: 'fa-solid fa-film' }
  ];

  readonly availableYears = computed<YearFilterOption[]>(() => {
    const yearMap = new Map<string, number>();
    for (const item of this.allItems) {
      yearMap.set(item.year, (yearMap.get(item.year) || 0) + 1);
    }
    const sortedYears = Array.from(yearMap.keys()).sort((a, b) => parseInt(b, 10) - parseInt(a, 10));
    return [
      { year: 'all', count: this.allItems.length },
      ...sortedYears.map(y => ({ year: y, count: yearMap.get(y) || 0 }))
    ];
  });

  readonly filteredItems = computed<GalleryItem[]>(() => {
    const cat = this.selectedCategory();
    const yr = this.selectedYear();
    return this.allItems.filter(item => {
      const matchCat = cat === 'all' || item.category === cat;
      const matchYear = yr === 'all' || item.year === yr;
      return matchCat && matchYear;
    });
  });

  setCategory(category: GalleryCategory): void {
    this.selectedCategory.set(category);
  }

  setYear(year: string): void {
    this.selectedYear.set(year);
  }

  resetFilters(): void {
    this.selectedCategory.set('all');
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
