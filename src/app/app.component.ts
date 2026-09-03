import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParticleBackgroundComponent } from './components/particle-background/particle-background.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { LegacyTimelineComponent } from './components/legacy/legacy-timeline/legacy-timeline.component';
import { LegacyMemoriesComponent } from './components/legacy/legacy-memories/legacy-memories.component';
import { UpcomingEventComponent } from './components/events/upcoming-event/upcoming-event.component';
import { EventScheduleComponent } from './components/events/event-schedule/event-schedule.component';
import { PhotoGalleryComponent } from './components/gallery/photo-gallery/photo-gallery.component';
import { CommitteeComponent } from './components/committee/committee.component';
import { OurFamilyComponent } from './components/our-family/our-family.component';
import { MahaBhogComponent } from './components/maha-bhog/maha-bhog.component';
import { DeveloperInfoComponent } from './components/developer/developer-info.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    ParticleBackgroundComponent,
    HeroComponent,
    AboutComponent,
    LegacyTimelineComponent,
    LegacyMemoriesComponent,
    UpcomingEventComponent,
    EventScheduleComponent,
    PhotoGalleryComponent,
    CommitteeComponent,
    OurFamilyComponent,
    MahaBhogComponent,
    DeveloperInfoComponent,
    LightboxComponent,
    ScrollToTopComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'STAR BOYS | Maa Laxmi Puja Committee';
}
