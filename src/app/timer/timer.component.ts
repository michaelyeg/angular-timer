import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent implements OnInit {
  started: boolean;
  minutes: number;
  seconds: number;
  newMin: number;
  interval: any;

  constructor() {
    this.started = false;
    this.minutes = 25;
    this.seconds = 0;
  }

  resetVariables(mins, secs, started) {
    this.minutes = mins;
    this.seconds = secs;
    this.started = started;
  }

  start() {
    if (!this.started && !(this.minutes === 0 && this.seconds === 0)) {
      this.started = true;
      this.interval = setInterval(() => this.intervalCallback(), 1000);
    }
  }

  addFive() {
    if (this.started) {
      this.minutes += 5;
    }
  }

  minusFive() {
    if (this.started) {
      this.minutes -= 5;
    }
  }

  stop() {
    clearInterval(this.interval);
    this.started = false;
  }

  reset() {
    this.stop();
    this.resetVariables(25, 0, false);
  }

  intervalCallback() {
    if (this.minutes < 0) {
      this.stop();
      this.resetVariables(0, 0, false);
    } else if (this.seconds > 0) {
      this.seconds --;
    } else if (this.seconds === 0 && this.minutes > 0) {
      this.minutes -= 1;
      this.seconds = 59;
    } else {
      this.stop();
    }
  }

  ngOnInit(): void {
    this.reset();
  }
}
