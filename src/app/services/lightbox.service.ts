import { Injectable, signal } from '@angular/core';

export interface LightboxImage {
  src: string;
  title: string;
  year?: string;
  category?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  readonly isOpen = signal<boolean>(false);
  readonly currentImage = signal<LightboxImage | null>(null);
  readonly imageList = signal<LightboxImage[]>([]);
  readonly currentIndex = signal<number>(0);

  open(image: LightboxImage, list: LightboxImage[] = []): void {
    const fullList = list.length > 0 ? list : [image];
    const index = fullList.findIndex(item => item.src === image.src);
    this.imageList.set(fullList);
    this.currentIndex.set(index >= 0 ? index : 0);
    this.currentImage.set(fullList[this.currentIndex()]);
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.isOpen.set(false);
    this.currentImage.set(null);
    document.body.style.overflow = '';
  }

  next(): void {
    const list = this.imageList();
    if (list.length <= 1) return;
    const nextIdx = (this.currentIndex() + 1) % list.length;
    this.currentIndex.set(nextIdx);
    this.currentImage.set(list[nextIdx]);
  }

  prev(): void {
    const list = this.imageList();
    if (list.length <= 1) return;
    const prevIdx = (this.currentIndex() - 1 + list.length) % list.length;
    this.currentIndex.set(prevIdx);
    this.currentImage.set(list[prevIdx]);
  }
}
