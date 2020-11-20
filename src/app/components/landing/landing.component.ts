import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  private _eventEndsAt: string;
  private _diff: number;

  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor() {
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this._eventEndsAt = '2020-11-28';
  }

  ngOnInit(): void {
    interval(1000)
      .pipe(
        map((_) => {
          this._diff =
            Date.parse(this._eventEndsAt) - Date.parse(new Date().toString());
        })
      )
      .subscribe((_) => {
        this.days = this.getDays(this._diff);
        this.hours = this.getHours(this._diff);
        this.minutes = this.getMinutes(this._diff);
        this.seconds = this.getSeconds(this._diff);

        // Event expiry
        if (this._diff < 0) {
          this.days = 0;
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
        }
      });
  }

  getDays(t: number): number {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  getHours(t: number): number {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  getMinutes(t: number): number {
    return Math.floor((t / 1000 / 60) % 60);
  }

  getSeconds(t: number): number {
    return Math.floor((t / 1000) % 60);
  }
}
