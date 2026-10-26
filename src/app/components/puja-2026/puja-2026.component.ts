import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PujaDataService } from '../../services/puja-data.service';
import { LightboxService } from '../../services/lightbox.service';
import { GalleryItem } from '../../models/gallery.model';
import { DecorativeDividerComponent } from '../../shared/decorative-divider/decorative-divider.component';

@Component({
  selector: 'app-puja-2026',
  standalone: true,
  imports: [CommonModule, DecorativeDividerComponent],
  templateUrl: './puja-2026.component.html',
  styleUrls: ['./puja-2026.component.scss']
})
export class Puja2026Component {
  private pujaData = inject(PujaDataService);
  private lightbox = inject(LightboxService);

  // Photos configured in puja-data.service
  readonly allPhotos = computed<GalleryItem[]>(() => {
    return this.pujaData.get2026GalleryItems();
  });

  // Filter category selection within 2026 section
  readonly activeCategory = signal<string>('all');

  readonly filteredPhotos = computed<GalleryItem[]>(() => {
    const cat = this.activeCategory();
    const photos = this.allPhotos();
    if (cat === 'all') return photos;
    return photos.filter(p => p.category === cat);
  });

  // Theme info for 2026
  readonly themeInfo = {
    year: '2026',
    title: 'Royal Pushpa Mahal Pandal',
    tagline: 'Grace Woven in Grain • Rice & Eco-Craft Pratima',
    description: 'A breathtaking royal palace sanctum adorned with red curtains, white arches, glittering crystal chandeliers, and blossoming floral gateways. Maa Laxmi sits in the center, handcrafted from rice and natural eco-friendly grains, showering eternal prosperity, joy, and peace.',
    date: 'October 26 – November 4, 2026',
    location: 'School Sahi, Ghantapada, Talcher'
  };

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
  }

  openLightbox(photo: GalleryItem): void {
    const list = this.allPhotos().map(item => ({
      src: item.image,
      title: item.title,
      year: item.year,
      category: item.categoryLabel,
      description: item.description
    }));

    this.lightbox.open({
      src: photo.image,
      title: photo.title,
      year: photo.year,
      category: photo.categoryLabel,
      description: photo.description
    }, list);
  }
}
