import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent {
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
    this.started = true;
  }

  addFive() {
    this.minutes += 5;
  }

  minusFive() {
    this.minutes -= 5;
  }


  stop() {
    this.started = false;
  }

  reset() {
    this.resetVariables(25,0, false);
  }

  intervalCallback() {

  }

}
