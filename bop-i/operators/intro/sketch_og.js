var xPosition = 200;
var yPosition = 400;
var appleList = [];
var apple;
var appleImg;

var calc;
var calcList = [];

var sel;
var numberChoice;
var bg;

var font;
var buttons = [];
var mainButton, resetButton, selectThick, selectThin, selectThickDiv, selectThinDiv;
var errorButton;


var constants = {
  background: '#f5a623',
  backgroundLight: '#FFC462',
  gradientW: 15,
  gradientCount: 15,
  fnButtonW: 9.5,
  fnButtonH: 2,
  regButtonW: 6.5,
  regButtonH: 2,
  resetButtonD: 2,
  selectW: 5,
  selectH: 1.5,
  tableW: 32,
  tableH: 3,
};

var wUnit;
var hUnit;






function preload(){
  // bg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/data-types/Computer.png');
  groundImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/green_ground.png');
  appleImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/apple_new.png');
  // orangeImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/orange.png');
  reset = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-ii/refresh.png');
}

//for some reason, the image disappears
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function setup() {
  // Create array of gradient colors
  constants.gradient = [];
  const bkgLtColor = color(constants.backgroundLight);
  const bkgColor = color(constants.background);
  for (let i = 0; i < constants.gradientCount; i++) {
    constants.gradient.push(lerpColor(bkgColor, bkgLtColor, i/constants.gradientCount));
  }

  var canvas = createCanvas(windowWidth, windowHeight);

  // Expects Oxygen imported as <link> in HTML
  textFont('Oxygen');
  textSize(18);
  noStroke();

  // The canvas will be divided into a 36 x 36 grid
  wUnit = windowWidth / 36;
  hUnit = windowHeight / 36;

  // Add reset button
  resetButton = new Button( width - 2*wUnit - 2*wUnit, 2*hUnit, constants.resetButtonD*hUnit, constants.resetButtonD*hUnit, ' ', 'circ');

  buttons.push(resetButton);
  background(constants.background);
  const lightDiameter = constants.gradientW * hUnit;

  const tableWidth = constants.tableW * wUnit;
  const tableHeight = constants.tableH * hUnit
  table = {x: width/2 - (tableWidth/2), y: height - 1.5*hUnit - tableHeight, w: tableWidth, h: tableHeight, color: constants.tableColor};

  // white circle in the middle
    ellipseMode(CENTER);
    constants.gradient.forEach((color, index) => {
      fill(color);
      ellipse(width/2, table.y - lightDiameter/2, lightDiameter*(1 - index/constants.gradient.length), lightDiameter* (1 - index/constants.gradient.length));
    });
    ellipseMode(CORNER);



  // Draw button(s) - not sure if this code works
    let isOnButton = false;

    buttons.forEach((elem) => {
      if (elem.underMouse()) {
        if (mouseIsPressed) {
          elem.draw(elem.colorClick);
        } else {
          elem.draw(elem.colorHover);
        }
        isOnButton = true;
      } else {
        elem.draw(elem.color);
      }
    });

    imageMode(CENTER);
    image(reset, resetButton.x + resetButton.w/2, resetButton.y + resetButton.h/2, resetButton.w/2, resetButton.h/2);
    imageMode(CORNER);

    cursor( isOnButton ? HAND : ARROW )

// need to calculate ground based off of other stuff
  ground = image(groundImg, 0, height - 300);

  // start with one apple
  newApple = new Apple();
  //console.log(appleList);

  newApple.x = xPosition;
  newApple.y = yPosition;
  appleList.push(newApple);
  console.log(newApple);
  console.log(yPosition);
  newApple.display();
  displayNumbers();

  addButton = select('#add');
  addButton.position(width/2 - 300, 20);

  subtractButton = select('#subtract');
  subtractButton.position(addButton.x + addButton.width + 16, 20);


  // checkAnswer();
}

// function draw(){
//   background("orange");
//   renderApples();
//   fill("black");
//   text("Number of Apples: " + appleList.length, 10, 30);
//   checkAnswer();
// }

function addApple() {
  reloadThis();
  newApple = new Apple();
  newApple.x = xPosition + random(-150,450);
  newApple.y = yPosition + random(-50,150);

  // add to array
  appleList.push(newApple);

	// display new array
  renderApples();
  displayNumbers();
  calc = text((appleList.length - 1) + " + 1 = " + appleList.length, width/2-250, height/2);
  calcList.push(newApple);
}

function subtractApple() {
  reloadThis();
  appleList.pop();
  renderApples();
  displayNumbers();
  text((appleList.length + 1) + " - 1 = " + appleList.length, width/2-250, height/2);
  calcList.push(newApple);
}

function displayNumbers(){
  fill("white");
  textFont('Oxygen');
  textStyle(BOLD);
  textSize(24);
  text("Number of Apples: " + appleList.length, width/2-250, height/2-100);
}


function renderApples(){
  for(var i = 0; i < appleList.length; i++) {
    var myApple = appleList[i];
    //console.log(myApple);
    myApple.display();
  }
}

// function renderCalc(){
//   for(var i = 0; i < appleList.length; i++) {
//     var myCalc = calcList[i];
//     //console.log(myApple);
//     myApple.display();
//   }
// }

// this needs to be reloaded so that outputs can change and not layer
function reloadThis(){
  // image(bg, 0, 40);
  background(constants.background);
  const lightDiameter = constants.gradientW * hUnit;

  ellipseMode(CENTER);
  constants.gradient.forEach((color, index) => {
    fill(color);
    ellipse(width/2, table.y - lightDiameter/2, lightDiameter*(1 - index/constants.gradient.length), lightDiameter* (1 - index/constants.gradient.length));
  });
  ellipseMode(CORNER);

  ground = image(groundImg, 0, height - 300);

  // Draw button(s)
  let isOnButton = false;

  buttons.forEach((elem) => {
    if (elem.underMouse()) {
      if (mouseIsPressed) {
        elem.draw(elem.colorClick);
      } else {
        elem.draw(elem.colorHover);
      }
      isOnButton = true;
    } else {
      elem.draw(elem.color);
    }
  });
  imageMode(CENTER);
  image(reset, resetButton.x + resetButton.w/2, resetButton.y + resetButton.h/2, resetButton.w/2, resetButton.h/2);
  imageMode(CORNER);

  cursor( isOnButton ? HAND : ARROW )
}

function checkAnswer(){
  if (appleList.length == 14){
    text("YOU GOT IT!", 10, 10);
    console.log("win!");
  }
}


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

class Button {
  constructor(x, y, w, h, text, shape, color, colorHover, colorClick) {
    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 50;
    this.h = h || 20;
    this.text = text || 'button';
    this.shape = shape || 'rect';
    this.color = color || '#fa4359';
    this.colorHover = colorHover || '#D52E42';
    this.colorClick = colorClick || '#B1192B';
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
