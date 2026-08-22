import { Injectable, signal } from '@angular/core';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  formatted: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  private timerInterval: any = null;
  readonly timeLeft = signal<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
    formatted: {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    }
  });

  startCountdown(targetDateIso: string): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    const update = () => {
      const targetTime = new Date(targetDateIso).getTime();
      const currentTime = new Date().getTime();
      const diff = targetTime - currentTime;

      if (diff <= 0) {
        this.timeLeft.set({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
          formatted: {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
          }
        });
        if (this.timerInterval) {
          clearInterval(this.timerInterval);
        }
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      this.timeLeft.set({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
        formatted: {
          days: this.padZero(days),
          hours: this.padZero(hours),
          minutes: this.padZero(minutes),
          seconds: this.padZero(seconds)
        }
      });
    };

    update();
    this.timerInterval = setInterval(update, 1000);
  }

  stopCountdown(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  private padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
