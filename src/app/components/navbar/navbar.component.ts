import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PujaDataService } from '../../services/puja-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private pujaData = inject(PujaDataService);

  readonly committee = this.pujaData.getCommitteeInfo();
  readonly isScrolled = signal<boolean>(false);
  readonly isMobileMenuOpen = signal<boolean>(false);
  readonly activeSection = signal<string>('home');

  readonly navLinks = [
    { label: 'Home', target: 'home', icon: 'fa-solid fa-house' },
    { label: 'About', target: 'about', icon: 'fa-solid fa-om' },
    { label: 'Our Legacy', target: 'legacy', icon: 'fa-solid fa-timeline' },
    { label: 'Puja Events', target: 'events', icon: 'fa-solid fa-calendar-days' },
    { label: 'Gallery', target: 'gallery', icon: 'fa-solid fa-images' },
    { label: 'Committee', target: 'committee', icon: 'fa-solid fa-users' },
    { label: 'Developer', target: 'developer', icon: 'fa-solid fa-code' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled.set(scrollPosition > 40);

    // Spy on sections
    const sections = this.navLinks.map(link => link.target);
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom >= 160) {
          this.activeSection.set(sectionId);
          break;
        }
      }
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  scrollToSection(targetId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.closeMobileMenu();
    this.activeSection.set(targetId);

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
