class Apple {
  constructor(x, y) {
    this.x =  width/2;
    this.y =  height/2;
  }

  display(){
    var bounceApple = image(appleImg, this.x, this.y, 100, 100);
    // animation
  }
}

class Orange {
  constructor(x, y) {
    this.x =  width/2;
    this.y =  height/2;
  }

  display(){
    var bounceApple = image(orangeImg, this.x, this.y, 100, 100);
    // animation
  }
}

class Button {
  constructor(x, y, w, h, text, shape, color, colorHover, colorClick, colorClicked) {
    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 50;
    this.h = h || 20;
    this.text = text || 'button';
    this.shape = shape || 'rect';
    this.color = color || '#fa4359';
    this.colorHover = colorHover || '#D52E42';
    // this.colorClick = colorClick || '#B1192B';
    this.colorClicked = colorClicked || 'yellow';
  }

  underMouse() {
    return (mouseX >= this.x) && (mouseX <= this.x + this.w) && (mouseY >= this.y) && (mouseY <= this.y + this.h);
  }

  draw(color) {
    fill(color || this.color);
    switch (this.shape) {
      case 'rect':
      default:
        rect(this.x, this.y, this.w, this.h, 5);
        break;
      case 'circ':
        ellipse(this.x, this.y, this.w, this.h);
        break;
    }

    fill('white');
    textAlign(CENTER, CENTER);
    text(this.text, this.x + 10, this.y, this.w - 10, this.h);
  }
}
