import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PujaDataService } from '../../../services/puja-data.service';
import { DecorativeDividerComponent } from '../../../shared/decorative-divider/decorative-divider.component';

@Component({
  selector: 'app-event-schedule',
  standalone: true,
  imports: [CommonModule, DecorativeDividerComponent],
  templateUrl: './event-schedule.component.html',
  styleUrls: ['./event-schedule.component.scss']
})
export class EventScheduleComponent {
  private pujaData = inject(PujaDataService);
  readonly allSchedule = this.pujaData.getEventSchedule();

  readonly activeFilter = signal<'all' | 'day1' | 'day2' | 'day3'>('all');

  readonly filteredSchedule = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') {
      return this.allSchedule;
    }
    return this.allSchedule.filter(item => item.dayId === filter);
  });

  setFilter(filter: 'all' | 'day1' | 'day2' | 'day3'): void {
    this.activeFilter.set(filter);
  }
}
