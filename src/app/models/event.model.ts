export interface PujaEventConfig {
  title: string;
  subTitle: string;
  year: string;
  targetDate: string; // ISO format: e.g. "2026-10-25T18:00:00"
  displayDate: string;
  location: string;
  venueMapUrl?: string;
  description: string;
  themeBanner: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
  icon: string; // FontAwesome icon class
  highlight?: boolean;
}

export interface PastEvent {
  year: string;
  title: string;
  theme: string;
  coverImage: string;
  description: string;
  attendeesCount: string;
  highlightText: string;
}
