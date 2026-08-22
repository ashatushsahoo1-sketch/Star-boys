export type GalleryCategory = 'all' | 'puja' | 'decoration' | 'cultural' | 'community' | 'memories';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  year: string;
  description: string;
}
