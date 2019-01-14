var appleList = [];
var orangeList = [];
var apple, orange;
var appleImg, orangeImg;

var calc;
var calcList = [];

var sel;
var numberChoice;
var jsFile;

jQuery.get('main.js', function(data) {
     var jsFile = data;
     console.log(jsFile);

     console.log(jsFile.includes("apple > orange"));
 });


// var textByLine = text.split("\n")
// console.log(textByLine);

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
  cardW: 30,
  cardH: 30
};

var wUnit;
var hUnit;



function preload(){
  appleImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/apple_new.png');
  orangeImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/orange.png');
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

  backdrop();
  // start with one apple
  newApple = new Apple();

  newApple.x = width/2 + random(-width/2, width/2);
  newApple.y = height/2 - random(-height/4, -height/8);
  appleList.push(newApple);

  newApple.display();
  //displayNumbers();

  if (apple == 3){
    renderApples();
  }

  if (orange == 2){
    renderOranges();
  }

  if ((apple == 3) && (orange == 2)){
    checkComparison();
    checkBoolean();
    displayNumbers();
  }

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

function displayNumbers(){
  fill('white');
  textFont('Oxygen');
  textStyle(BOLD);
  textSize(24);
  var numText = text("Number of Apples: " + appleList.length, width/2- (6 * hUnit), height/2 - (8.5 * hUnit));
    var numText = text("Number of Oranges: " + orangeList.length, width/2- (6.5 * hUnit), height/2 - (6.5 * hUnit));

// change it back to normal (because for some reason it won't otherwise:
  textFont('Oxygen');
  textStyle(NORMAL);
  textSize(18);
}


function renderApples(){
backdrop();
  for (var i = 0; i < 2; i++){
    newApple = new Apple();
    newApple.x = width/2 + random(-width/2, width/2);
    newApple.y = height/2 - random(-height/4, -height/8);

    // add to array
    appleList.push(newApple);
  }

  appleList.forEach(function(element){
    var myApple = element;
    myApple.display();
  });

   //displayNumbers();
  //   calc = text((appleList.length - 1) + " + 1 = " + appleList.length, width/2-250, height/2);
  //   calcList.push(newApple);
}

function renderOranges(){
//backdrop();
  for (var i = 0; i < 2; i++){
  newOrange = new Orange();
  newOrange.x = width/2 + random(-width/2, width/2);
  newOrange.y = height/2 - random(-height/4, -height/8);

  // add to array
  orangeList.push(newOrange);
}

  orangeList.forEach(function(element){
    var myOrange = element;
    myOrange.display();
  });

  //displayNumbers();

}



function checkComparison(){
jQuery.get('scripts/main.js', function(data) {
    jsFile = data;
    // console.log(jsFile);
    console.log(jsFile.includes("(apple > orange)"));
});

push();
fill('#37c3be');
text("(apple > orange)", width/2 - (7.5*wUnit) , 15.5*hUnit);
image(checkmark, width/2 + (4.5 * wUnit), 14.75*hUnit);
text("True!", width/2 + (6.5*wUnit), 15.5*hUnit);
pop();
// text('TRUE', width/2, height/2);
}

function checkBoolean(){
jQuery.get('scripts/main.js', function(data) {
    jsFile = data;
    // console.log(jsFile);
    console.log(jsFile.includes("(apple == 3) || (orange == 4)"));

});
push();
fill('#37c3be');
text("(apple == 3) || (orange == 4)", width/2 - (12.5*wUnit) , 17.5*hUnit);
image(checkmark, width/2 + (7.5 * wUnit), 16.75*hUnit);
text("True!", width/2 + (9.5*wUnit), 17.5*hUnit);
pop();

// text('ALSO TRUE', width/2+50, height/2+50);
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
