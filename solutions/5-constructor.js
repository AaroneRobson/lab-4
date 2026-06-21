function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = () => this.x;
  this.getY = () => this.y;
}

function Segment(startPoint, endPoint) {
  this.startPoint = startPoint;
  this.endPoint = endPoint;
  this.getStart = () => this.startPoint;
  this.getEnd = () => this.endPoint;
}

const reverse = (segment) => {
  const newStart = new Point(segment.getEnd().getX(), segment.getEnd().getY());
  const newEnd = new Point(segment.getStart().getX(), segment.getStart().getY());
  return new Segment(newStart, newEnd);
};

export { Point, Segment, reverse };