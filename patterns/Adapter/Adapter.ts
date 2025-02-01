class RoundHole {
  radius: number;
  
  constructor(radius: number) {
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }

  fits(peg: RoundPeg): boolean {
    return this.getRadius() >= peg.getRadius();
  }
}

class RoundPeg {
  radius: number;
  
  constructor(radius: number) {
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }
}

class SquarePeg {
  width: number;
  
  constructor(width: number) {
    this.width = width;
  }

  getWidth(): number {
    return this.width;
  }
}

class SquarePegAdapter extends RoundPeg {
  private peg: SquarePeg;

  constructor(peg: SquarePeg) {
    super(peg.getWidth() * Math.sqrt(2) / 2);
    this.peg = peg;
  }

  getRadius(): number {
    return this.peg.getWidth() * Math.sqrt(2) / 2;
  }
}