import { Component, inject } from '@angular/core';
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
  readonly schedule = this.pujaData.getEventSchedule();
}
