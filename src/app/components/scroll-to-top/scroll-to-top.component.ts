import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isVisible()) {
      <button
        type="button"
        class="scroll-to-top-btn"
        (click)="scrollToTop()"
        aria-label="Scroll back to top of page">
        <i class="fa-solid fa-arrow-up"></i>
        <span class="btn-ripple"></span>
      </button>
    }
  `,
  styles: [`
    .scroll-to-top-btn {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ffe8a3, #f5c542, #b8860b);
      border: 2px solid #160718;
      color: #160718;
      font-size: 1.15rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 999;
      box-shadow: 0 4px 20px rgba(245, 197, 66, 0.45);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      animation: popIn 0.3s ease;

      @media (max-width: 576px) {
        bottom: 1.25rem;
        right: 1.25rem;
        width: 42px;
        height: 42px;
        font-size: 1rem;
      }

      &:hover {
        transform: translateY(-5px) scale(1.1);
        box-shadow: 0 8px 30px rgba(245, 197, 66, 0.7);
        color: #000;
      }

      &:active {
        transform: translateY(-2px);
      }
    }

    @keyframes popIn {
      from { transform: scale(0); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `]
})
export class ScrollToTopComponent {
  readonly isVisible = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scroll = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isVisible.set(scroll > 450);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
