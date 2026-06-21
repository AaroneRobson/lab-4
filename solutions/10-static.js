export default class Time {
  static fromString(input) {
    const [h, m] = input.split(':');
    return new Time(parseInt(h, 10), parseInt(m, 10));
  }

  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}