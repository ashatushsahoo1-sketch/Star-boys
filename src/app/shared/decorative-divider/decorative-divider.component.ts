import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decorative-divider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="decorative-divider-wrapper" [class.inverted]="inverted">
      <div class="divider-line left"></div>
      <div class="divider-symbol">
        <svg class="lotus-motif" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Center Lotus Petal -->
          <path d="M32 6C28 18 20 28 32 50C44 28 36 18 32 6Z" fill="url(#goldGrad)" />
          <!-- Left Petal -->
          <path d="M32 50C18 42 6 30 14 18C20 28 28 38 32 50Z" fill="url(#goldGrad)" opacity="0.85"/>
          <!-- Right Petal -->
          <path d="M32 50C46 42 58 30 50 18C44 28 36 38 32 50Z" fill="url(#goldGrad)" opacity="0.85"/>
          <!-- Base Pod / Diya Shape -->
          <path d="M22 50C26 56 38 56 42 50C38 48 26 48 22 50Z" fill="#ff7b00"/>
          <!-- Glow center dot -->
          <circle cx="32" cy="46" r="2.5" fill="#ffffff" />
          
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffe8a3" />
              <stop offset="50%" stop-color="#f5c542" />
              <stop offset="100%" stop-color="#c69214" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="divider-line right"></div>
    </div>
  `,
  styles: [`
    .decorative-divider-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.25rem;
      width: 100%;
      max-width: 480px;
      margin: 1.25rem auto 2.5rem;
      position: relative;
      z-index: 2;

      .divider-line {
        flex: 1;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(245, 197, 66, 0.6), transparent);
        position: relative;

        &::after {
          content: '';
          position: absolute;
          top: -2px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold, #f5c542);
          box-shadow: 0 0 8px rgba(245, 197, 66, 0.8);
        }

        &.left::after {
          right: 0;
        }

        &.right::after {
          left: 0;
        }
      }

      .divider-symbol {
        display: flex;
        align-items: center;
        justify-content: center;

        .lotus-motif {
          width: 36px;
          height: 36px;
          filter: drop-shadow(0 0 10px rgba(245, 197, 66, 0.5));
          transition: transform 0.4s ease;

          &:hover {
            transform: scale(1.15) rotate(5deg);
          }
        }
      }

      &.inverted {
        .divider-line {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        }
      }
    }
  `]
})
export class DecorativeDividerComponent {
  @Input() inverted: boolean = false;
}
