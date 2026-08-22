import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PujaDataService } from '../../../services/puja-data.service';
import { CountdownService } from '../../../services/countdown.service';
import { DecorativeDividerComponent } from '../../../shared/decorative-divider/decorative-divider.component';

@Component({
  selector: 'app-upcoming-event',
  standalone: true,
  imports: [CommonModule, DecorativeDividerComponent],
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.scss']
})
export class UpcomingEventComponent implements OnInit, OnDestroy {
  private pujaData = inject(PujaDataService);
  private countdown = inject(CountdownService);

  readonly eventConfig = this.pujaData.getPujaEventConfig();
  readonly timeLeft = this.countdown.timeLeft;

  ngOnInit(): void {
    this.countdown.startCountdown(this.eventConfig.targetDate);
  }

  ngOnDestroy(): void {
    this.countdown.stopCountdown();
  }

  scrollToSchedule(event: Event): void {
    event.preventDefault();
    const el = document.getElementById('schedule');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
