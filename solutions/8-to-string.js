export function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function getX() {
  return this.x;
};

Point.prototype.getY = function getY() {
  return this.y;
};

Point.prototype.toString = function toString() {
  return `(${this.getX()}, ${this.getY()})`;
};

export function Segment(startPoint, endPoint) {
  this.startPoint = startPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getStart = function getStart() {
  return this.startPoint;
};

Segment.prototype.getEnd = function getEnd() {
  return this.endPoint;
};

Segment.prototype.toString = function toString() {
  return `[${this.getStart().toString()}, ${this.getEnd().toString()}]`;
};