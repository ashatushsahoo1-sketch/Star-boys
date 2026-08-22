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

  readonly categories: FilterOption[] = [
    { id: 'all', label: 'All Photos', icon: 'fa-solid fa-border-all' },
    { id: 'puja', label: 'Puja & Rituals', icon: 'fa-solid fa-om' },
    { id: 'decoration', label: 'Decoration & Pandal', icon: 'fa-solid fa-wand-magic-sparkles' },
    { id: 'cultural', label: 'Cultural Nights', icon: 'fa-solid fa-masks-theater' },
    { id: 'community', label: 'Community & Seva', icon: 'fa-solid fa-hands-holding-heart' },
    { id: 'memories', label: 'Golden Memories', icon: 'fa-solid fa-film' }
  ];

  readonly filteredItems = computed<GalleryItem[]>(() => {
    const cat = this.selectedCategory();
    if (cat === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => item.category === cat);
  });

  setCategory(category: GalleryCategory): void {
    this.selectedCategory.set(category);
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
