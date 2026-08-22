import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PujaDataService } from '../../services/puja-data.service';
import { DecorativeDividerComponent } from '../../shared/decorative-divider/decorative-divider.component';
import { CommitteeMember } from '../../models/committee.model';

@Component({
  selector: 'app-committee',
  standalone: true,
  imports: [CommonModule, FormsModule, DecorativeDividerComponent],
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.scss']
})
export class CommitteeComponent {
  private pujaData = inject(PujaDataService);

  readonly kartaMembers = this.pujaData.getKartaMembers();
  readonly techMembers = this.pujaData.getTechMembers();
  readonly allMembers = this.pujaData.getCommitteeMembers();

  readonly activeCategory = signal<string>('all');
  readonly searchQuery = signal<string>('');
  readonly imageErrorSet = new Set<string>();

  readonly categories = [
    { id: 'all', label: 'All Members', icon: 'fa-solid fa-users', count: 40 },
    { id: 'leadership', label: 'Core Leadership', icon: 'fa-solid fa-crown', count: 8 },
    { id: 'advisor', label: 'Advisors & Elders', icon: 'fa-solid fa-award', count: 4 },
    { id: 'organizer', label: 'Event & Logistics', icon: 'fa-solid fa-sitemap', count: 12 },
    { id: 'seva', label: 'Finance & Seva', icon: 'fa-solid fa-hands-holding-circle', count: 8 },
    { id: 'youth', label: 'Youth Brigade', icon: 'fa-solid fa-bolt', count: 8 }
  ];

  readonly filteredMembers = computed(() => {
    const category = this.activeCategory();
    const query = this.searchQuery().trim().toLowerCase();

    return this.allMembers.filter(member => {
      const matchesCategory = category === 'all' || member.category === category;
      const matchesQuery = !query || 
        member.name.toLowerCase().includes(query) || 
        member.role.toLowerCase().includes(query) || 
        (member.badge && member.badge.toLowerCase().includes(query)) ||
        (member.bio && member.bio.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  });

  setCategory(catId: string) {
    this.activeCategory.set(catId);
  }

  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
  }

  clearSearch() {
    this.searchQuery.set('');
  }

  handleImageError(id: string) {
    this.imageErrorSet.add(id);
  }

  hasImageError(id: string): boolean {
    return this.imageErrorSet.has(id);
  }
}

