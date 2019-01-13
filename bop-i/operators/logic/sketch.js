var appleList = [];
var apple;

var orangeList = [];
var orange;

var myApple, myOrange, myOperator;

var fruitChoice, operatorChoice1, operatorChoice2, operatorChoice3;

var recipeTitle, recipeDesc;

var leftText, rightText;

var font;
var buttons = [];
var mainButton, resetButton, selectThick, selectThin, selectThickDiv, selectThinDiv;
var errorButton;

var constants = {
  background: '#f5a623',
  backgroundLight: '#FFC462',
  gradientW: 15,
  gradientCount: 15,
  fnButtonW: 4.5,
  fnButtonH: 2,
  regButtonW: 6.5,
  regButtonH: 2,
  resetButtonD: 2,
  selectW: 5,
  selectH: 1.5,
  hillColor:'#458100',
  hillOneW: 72,
  hillOneH: 30,
  hillTwoW: 122,
  hillTwoH: 20,
  cardW: 34,
  cardH: 30
};

var wUnit;
var hUnit;

function preload(){
  appleImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/apple_new.png');
  orangeImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/orange.png');
  reset = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-ii/refresh.png');
  checkmark = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/checkmark.png');
}

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

  // The canvas will be divided into a 36 x 36 grid
  wUnit = windowWidth / 36;
  hUnit = windowHeight / 36;

  // Create hillOne object
  const hillOneWidth = constants.hillOneW * wUnit;
  const hillOneHeight = constants.hillOneH * hUnit
  hillOne = {x: width/2 - (hillOneWidth/2), y: height - 1.5*hUnit,
    w: hillOneWidth, h: hillOneHeight, color: constants.hillColor};

  // Create hillTwo object
  const hillTwoWidth = constants.hillTwoW * wUnit;
  const hillTwoHeight = constants.hillTwoH * hUnit
  hillTwo = {x: width/2 + (hillTwoWidth/3), y: height - 1.5*hUnit,
    w: hillTwoWidth, h: hillTwoHeight, color: constants.hillColor};

    // Add reset button
    // resetButton = new Button( width - 2*wUnit - 2*wUnit, 2*hUnit,
    //   constants.resetButtonD*hUnit, constants.resetButtonD*hUnit, ' ', 'circ');
    // buttons.push(resetButton);


  backdrop();


  // set up scene
  fruitSceneOne();
}

function backdrop() {
  background(constants.background);
  noStroke();
  fill('white');
  textFont('Oxygen');
  textStyle(NORMAL);
  textSize(18);

  const lightDiameter = constants.gradientW * hUnit;

  // white circle in the middle of background
  ellipseMode(CENTER);
  constants.gradient.forEach((color, index) => {
  fill(color);
  ellipse(width/2, hillTwo.y - lightDiameter/2, lightDiameter*(1 - index/constants.gradient.length),
  lightDiameter* (1 - index/constants.gradient.length));
  });

  // Draw HillOne and HillTwo
  fill(hillOne.color);
  ellipse(hillOne.x, hillOne.y, hillOne.w, hillOne.h);
  ellipse(hillTwo.x, hillTwo.y, hillTwo.w, hillTwo.h);
  ellipseMode(CORNER);

  cardOne();
  cardTwo();
  cardThree();
}


function cardOne() {
  fill('white');


  rect((2.5*wUnit), hUnit, constants.cardW*(.25*wUnit), constants.cardH*(.6*hUnit));

  fill('black');
  textStyle(BOLD);
  textAlign(CENTER);
  text('Recipe 1: \nFruit Salad', (6.75*wUnit), 3*hUnit)

  push();
  textStyle(NORMAL);
  textSize(14);
  text('A recipe that includes both \n types of fruit', (6.75*wUnit), 6.5*hUnit)
  pop();

  text('3 Apples', (6.75*wUnit), 9.5*hUnit)
  textDropDown = select('#dd-1');
  textDropDown.position((4*wUnit), 10*hUnit);
  text('2 Oranges', (6.75*wUnit), 14.5*hUnit)
}

function cardTwo() {
  fill('white')
  rect(width/2 - (4.5*wUnit), hUnit, constants.cardW*(.25*wUnit), constants.cardH*(.6*hUnit))

  fill('black');
  textStyle(BOLD);
  text('Recipe 2: \n Applesauce', width/2 - (.35*wUnit), 3*hUnit)

  push();
  textStyle(NORMAL);
  textSize(14);
  text('A recipe that includes apples', width/2 - (.35*wUnit), 6.5*hUnit)
  pop();


  textDropDown = select('#dd-2');
  textDropDown.position(width/2 - (3*wUnit), 10*hUnit);
  text('0 Apples', width/2 - (.35*wUnit), 14.5*hUnit)
}

function cardThree() {
  fill('white')
  rect(width/2 + (6.5*wUnit), hUnit, constants.cardW*(.25*wUnit), constants.cardH*(.6*hUnit))


  fill('black');
  textStyle(BOLD);
  text('Recipe 3: \n Fruit Juice', width/2 + (10.75*wUnit), 3*hUnit)

  push();
  textStyle(NORMAL);
  textSize(14);
  text('A recipe can use \n either fruits', width/2 + (10.75*wUnit), 6.5*hUnit)
  pop();

  text('4 Apples', width/2 + (10.75*wUnit), 9.5*hUnit)
  textDropDown = select('#dd-3');
  textDropDown.position(width/2 + (8.25*wUnit), 10*hUnit);
  text('4 Oranges', width/2 + (10.75*wUnit), 14.5*hUnit)
}

function draw() {
  // need to put a clear in
  // Draw button(s) - this code changes colors of buttons depending on state (based on object)
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

  // // draw image on reset button
  // imageMode(CENTER);
  // image(reset, resetButton.x + resetButton.w/2, resetButton.y + resetButton.h/2, resetButton.w/2, resetButton.h/2);
  // imageMode(CORNER);

  cursor( isOnButton ? HAND : ARROW )
}


function fruitSceneOne(){
  (console.log('scene one'))
  backdrop();
  // draw a certain number of apples
  for (var i=0; i < 3; i++){
    newApple = new Apple();
    newApple.x = random(0, width/2);
    newApple.y = height/2 - random(-height/4, -height/8);

    // add to array
    appleList.push(newApple);
  }

  newOrange = new Orange();

  // draw a certain number of oranges
  for (var i=0; i < 2; i++){
    newOrange = new Orange();
    newOrange.x = random(width/2, width-(2.5*wUnit));
    newOrange.y = height/2 - random(-height/4, -height/8);

    // add to array
    orangeList.push(newOrange);
  }
    renderFruits();
    console.log('apple = ' + appleList.length)
    console.log('orange = ' + orangeList.length)
}


function fruitSceneTwo(){
  appleList = [];
  orangeList = [];

  (console.log('scene two'))
  backdrop();

  push();
  fill('#37c3be');
  image(checkmark, (4.5*wUnit), 15.75*hUnit);
  text("Correct!", (6.5*wUnit), 16.5*hUnit);
  pop();

  // draw a certain number of apples
  for (var i=0; i < 4; i++){
    newApple = new Apple();
    newApple.x = random(0, width/2);
    newApple.y = height/2 - random(-height/4, -height/8);

    // add to array
    appleList.push(newApple);
  }

  newOrange = new Orange();

  // draw a certain number of oranges
  for (var i=0; i < 0; i++){
    newOrange = new Orange();
    newOrange.x = random(width/2, width-(2.5*wUnit));
    newOrange.y = height/2 - random(-height/4, -height/8);

    // add to array
    orangeList.push(newOrange);
  }

  renderFruits();
  console.log('apple = ' + appleList.length)
  console.log('orange = ' + orangeList.length)
}


function fruitSceneThree(){
  appleList = [];
  orangeList = [];

  (console.log('scene three'))
  backdrop();

  push();
  fill('#37c3be');
  // keep first checkmark
  image(checkmark, (4.5*wUnit), 15.75*hUnit);
  text("Correct!", (6.5*wUnit), 16.5*hUnit);

  // draw second
  image(checkmark, width/2 - (2.5*wUnit), 15.75*hUnit);
  text("Correct!", width/2 - (.5 * wUnit), 16.5*hUnit);
  pop();


  // draw a certain number of apples
  for (var i=0; i < 4; i++){
    newApple = new Apple();
    newApple.x = random(0, width/2);
    newApple.y = height/2 - random(-height/4, -height/8);

    // add to array
    appleList.push(newApple);
  }

  newOrange = new Orange();

  // draw a certain number of oranges
  for (var i=0; i < 4; i++){
    newOrange = new Orange();
    newOrange.x = random(width/2, width-(2.5*wUnit));
    newOrange.y = height/2 - random(-height/4, -height/8);

    // add to array
    orangeList.push(newOrange);
  }

    renderFruits();
}



function renderFruits() {
  for (var i = 0; i < appleList.length; i++) {
    var myApple = appleList[i];
    myApple.display();
  }

  for (var j = 0; j < orangeList.length; j++) {
    var myOrange = orangeList[j];
    myOrange.display();
  }
}

function getOperatorValue() {
  selectOperator1 = select('#number-1', 'value')
  operatorChoice1 = selectOperator1.value();
  console.log(operatorChoice1)

  selectOperator2 = select('#number-2', 'value')
  operatorChoice2 = selectOperator2.value();
  console.log(operatorChoice2)

  selectOperator3 = select('#number-3', 'value')
  operatorChoice3 = selectOperator3.value();
  console.log(operatorChoice3)
}


function checkAnswer(){
  // fill("black");
  getOperatorValue();
  myOperator1 = operatorChoice1
  console.log('myOperator1', myOperator1)
  myOperator2 = operatorChoice2
  console.log('myOperator2', myOperator2)
  myOperator3 = operatorChoice3
  console.log('myOperator3', myOperator3)
  // myOperator = operatorChoice;

  if(myOperator1 == "AND" && appleList.length == 3 && orangeList.length == 2){

    // switch scene
    console.log('switch to scene 2')
    fruitSceneTwo();

  } else if (myOperator2 == "NOT" && appleList.length == 4 && orangeList.length == 0){
    console.log('switch to scene 3')
    fruitSceneThree();

  } else if (myOperator3 == "OR" && appleList.length == 4 || orangeList.length == 4){
    console.log('END')
    push();
    fill('#37c3be');
    image(checkmark, width/2 + (8.5 * wUnit), 15.75*hUnit);
    text("Correct!", width/2 + (10.5*wUnit), 16.5*hUnit);
    pop();
}
}
