/*
 * topping.js
 * Assumes that an image `fries` is pre-loaded.
 *
 */
class Topping {
  constructor(x, y, w, h, floor, maxBounces, color, shape) {
    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 10;
    this.h = h || 10;
    this.xVel = 0;
    this.yVel = 0;
    this.xAcc = 0;
    this.yAcc = 1;
    this.bounciness = 0.5;
    this.bounces = 0;
    this.floor = floor || height;
    this.maxBounces = maxBounces || 10;
    this.color = color || 'white';
    this.shape = shape || 'rect'
  }

  move() {
    this.yVel += this.yAcc;
    this.y += this.yVel;

    if (this.y > this.floor - this.h) {
      this.y = this.floor - this.h;
      this.yVel = this.yVel * -this.bounciness;
      this.bounces++
    }

    if (this.bounces >= this.maxBounces) {
      this.y = this.floor - this.h;
      this.yVel = 0;
      this.yAcc = 0;
    }
  }

  draw() {
    fill(this.color);
    switch (this.shape) {
      case 'rect':
      default:
        rect(this.x, this.y, this.w, this.h, 10);
        break;
      case 'circ':
        ellipse(this.x, this.y, this.w, this.h);
        break;
      case 'img':
        image(fries, this.x - 10, this.y, this.w + (2*10), this.h);
        break;
    }

  }
}
