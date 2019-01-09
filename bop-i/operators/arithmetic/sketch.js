var appleList = [];
var apple;
var numberChoice;

var font;
var buttons = [];
var mainButton, resetButton, selectThick, selectThin, selectThickDiv, selectThinDiv;
var errorButton;

var calcChoice;
var calcList = [0];
// var sel;


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
};

var wUnit;
var hUnit;

function preload(){
  appleImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/apple_new.png');
  // orangeImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/orange.png');
  reset = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-ii/refresh.png');
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

  // Add main buttons
  addButton = new Button( width/2 - (constants.fnButtonW/2)*wUnit - (7.5 * wUnit), 2 * hUnit,
  constants.fnButtonW * wUnit, constants.fnButtonH * hUnit, 'Add');

  subtractButton = new Button( width/2 - (constants.fnButtonW/2)*wUnit - (2.5 * wUnit), 2 * hUnit,
  constants.fnButtonW * wUnit, constants.fnButtonH * hUnit, 'Subtract');

  multiplyButton = new Button( width/2 - (constants.fnButtonW/2)*wUnit + (2.5 * wUnit), 2 * hUnit,
  constants.fnButtonW * wUnit, constants.fnButtonH * hUnit, 'Multiply');

  divideButton = new Button( width/2 - (constants.fnButtonW/2)*wUnit + (7.5 * wUnit), 2 * hUnit,
  constants.fnButtonW * wUnit, constants.fnButtonH * hUnit, 'Divide');

  calculateButton = new Button( width/2  - (2.3 * wUnit), 9 * hUnit,
  constants.fnButtonW * wUnit, constants.fnButtonH * hUnit, 'Calculate!');


  buttons.push(addButton, subtractButton, multiplyButton, divideButton, calculateButton);
  // buttons.push(subtractButton);

  // Add reset button
  resetButton = new Button( width - 2*wUnit - 2*wUnit, 2*hUnit,
    constants.resetButtonD*hUnit, constants.resetButtonD*hUnit, ' ', 'circ');
  buttons.push(resetButton);



  // Position select element
  selDiv = select('.custom-select');
  sel = select('#number');

  selDiv.position
    (width/2 - (sel.width) - (2.5 * wUnit), buttons[0].y + buttons[0].h + (2.5 * hUnit));

  backdrop();
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

}

function draw(){
    // clear apples if reset is pushed
    if (appleList.length == 0){
      backdrop();
    }

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

    // draw image on reset button
    imageMode(CENTER);
    image(reset, resetButton.x + resetButton.w/2, resetButton.y + resetButton.h/2, resetButton.w/2, resetButton.h/2);
    imageMode(CORNER);

    cursor( isOnButton ? HAND : ARROW )

    // display symbol for calculation
      // if (calcChoice == undefined){
      //   console.log('what')
      // } else if (numberChoice == undefined) {
      //   text(appleList.length - numberChoice + " " + symbol, width/2, height/2)
      //
      // } else {
      //   text(appleList.length - numberChoice + " " + symbol + " " + numberChoice + " = " + appleList.length, width/2, height/2)
      // }

}

// button functionality
function mousePressed(){

buttons.forEach((elem) => {
  if (elem.underMouse()) {
    let match;
    switch (elem.text) {
      // Main cases - grabbing button text to determine case
      case 'Add':
        console.log(calcChoice)
        calcChoice = 'Add';
        symbol = '+';
      break;

      case 'Subtract':
        calcChoice = 'Subtract';
        symbol = '-';
        console.log(calcChoice)
      break;

      case 'Multiply':
        calcChoice = 'Multiply';
        symbol = '*';
        console.log(calcChoice)
      break;

      case 'Divide':
        calcChoice = 'Divide';
        symbol = '/';
        console.log(calcChoice)
      break;

      case 'Calculate!':
        makeCalculation();
      break;

      default:
        // Remove all apples
        appleList = [];
        console.log(appleList)
    }
  }
  fill('white')

  return calcChoice;
});

}


function getValue() {
  // numberChoice = sel.value();
  selection = select('#number');
  numberChoice = selection.value();

  console.log(numberChoice);
  return numberChoice;
}

function addApple(number) {
  console.log('add');
  backdrop();
  number = numberChoice;

  for (var i = 0; i < number; i++){
  newApple = new Apple();
  newApple.x = width/2 + random(-width/2, width/2);
  newApple.y = height/2 - random(-height/4, -height/8);

  // add to array
  appleList.push(newApple);

	// display new array
  renderApples();
  }

  // return text(appleList, " + ", number);
  displayNumbers();

  //add final calculation to list for next time
  // calcList.push(appleList.length)
  // console.log(calcList)
  // text(calcList.slice(-2)[0] + " " + symbol + " " + numberChoice + " = " + appleList.length, width/2, height/2)

}

function subtractApple(number) {
  console.log('subtract');
  backdrop();
  number = numberChoice;

  for (var i = 0; i < number; i++){
  appleList.pop();
  renderApples();
  }
  displayNumbers();

  //add final calculation to list for next time
  // calcList.push(appleList.length)
  // console.log(calcList)
  // text(calcList.slice(-2)[0] + " " + symbol + " " + numberChoice + " = " + appleList.length, width/2, height/2)

}

function multiplyApple(number) {
  console.log('multiply');
  backdrop();
  number = numberChoice;

  var multiplied = (appleList.length * number) - appleList.length;

  for (var i = 0; i < multiplied; i++){

  newApple = new Apple();
  newApple.x = width/2 + random(-width/2, width/2);
  newApple.y = height/2 - random(-height/4, -height/8);

  // add to array
  appleList.push(newApple);

	// display new array
  renderApples();
  }
  displayNumbers();

  //add final calculation to list for next time
  // calcList.push(appleList.length)
  // console.log(calcList)
  // text(calcList.slice(-2)[0] + " " + symbol + " " + numberChoice + " = " + appleList.length, width/2, height/2)

}

function divideApple(number) {
  console.log('divide');
  backdrop();
  var numApples = appleList.length;
  console.log("num apples", numApples);

  number = numberChoice;
  var divisor = (numApples)/number;// - appleList.length;
  var outOfArray = numApples - divisor;
  console.log(outOfArray);
  console.log("divide", divisor);

  for (var i = 0; i < outOfArray; i++){
    appleList.pop();

  }
  renderApples();
  displayNumbers();

  //add final calculation to list for next time
  calcList.push(appleList.length)
  console.log(calcList)
  text(calcList.slice(-2)[0] + " " + symbol + " " + numberChoice + " = " + appleList.length, width/2, height/2)

}

function makeCalculation() {

  switch (calcChoice) {
    // Main cases - grabbing button text to determine case
    case 'Add':
      addApple();
    break;

    case 'Subtract':
      subtractApple();
    break;

    case 'Multiply':
      multiplyApple();
    break;

    case 'Divide':
      divideApple();
    break;
  }
}


function renderApples() {
  for(var i = 0; i < appleList.length; i++) {
    var myApple = appleList[i];
    //console.log(myApple);
    myApple.display();
  }
}

function displayNumbers(){
  fill('white');
  textFont('Oxygen');
  textStyle(BOLD);
  textSize(24);
  var numText = text("Number of Apples: " + appleList.length, width/2, height/2 - (6.5 * hUnit));

// change it back to normal (because for some reason it won't otherwise:
  textFont('Oxygen');
  textStyle(NORMAL);
  textSize(18);
}

function checkAnswer(){
  if (appleList.length == 14){
    text("YOU GOT IT!", 10, 10);
    console.log("win!");
  }
}


// $(document).ready(function() {
//   $('#btn1').bind('click', function(event) {
//     $('#btn1').css('background-color', 'yellow');
//   })
// })
