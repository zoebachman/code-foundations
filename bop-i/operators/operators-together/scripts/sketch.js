var xPosition = 200;
var yPosition = 400;
var appleList = [];
var orangeList = [];
var apple, orange;
var appleImg, orangeImg;

var calc;
var calcList = [];

var sel;
var numberChoice;
var bg;

// jQuery.get('http://localhost:8000/scripts/main.js', function(data) {
//     var jsFile = data;
//     console.log(jsFile);
//
//     console.log(jsFile.includes("apple > orange"));
// });


// var textByLine = text.split("\n")
// console.log(textByLine);


function preload(){
  // bg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/data-types/Computer.png');
  groundImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/green_ground.png');
  appleImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/apple_new.png');
  orangeImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/orange.png');
}

//for some reason, the image disappears
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function setup() {

  var canvas = createCanvas(windowWidth, windowHeight);

  // Expects Oxygen imported as <link> in HTML
  textFont('Oxygen');
  textSize(18);
  noStroke();


// need to calculate ground based off of other stuff
  // ground = image(groundImg, 0, height - 300);

  // start with one apple
  newApple = new Apple();

  newApple.x = xPosition;
  newApple.y = yPosition;
  appleList.push(newApple);

  newApple.display();
  displayNumbers();

  if (apple == 3){
    renderApples();
  }

  if (orange == 2){
    renderOranges();
  }

  if ((apple == 3) && (orange == 2)){
    checkComparison();
    checkBoolean();
  }

  // checkAnswer();
}

// function draw(){
//   background("orange");
//   renderApples();
//   fill("black");
//   text("Number of Apples: " + appleList.length, 10, 30);
//   checkAnswer();
// }








function displayNumbers(){
  fill("white");
  textFont('Oxygen');
  textStyle(BOLD);
  textSize(24);
  text("Number of Apples: " + appleList.length, width/2-250, height/2-100);
}


function renderApples(){

  for (var i = 0; i < 2; i++){
    newApple = new Apple();
    newApple.x = xPosition + random(-150,450);
    newApple.y = yPosition + random(-50,150);

    // add to array
    appleList.push(newApple);
  }


  appleList.forEach(function(element){
    var myApple = element;
    myApple.display();
  });

  //   displayNumbers();
  //   calc = text((appleList.length - 1) + " + 1 = " + appleList.length, width/2-250, height/2);
  //   calcList.push(newApple);
}

function renderOranges(){

  for (var i = 0; i < 2; i++){
  newOrange = new Orange();
  newOrange.x = xPosition + random(-150,450);
  newOrange.y = yPosition + random(-50,150);

  // add to array
  orangeList.push(newOrange);
}

  orangeList.forEach(function(element){
    var myOrange = element;
    myOrange.display();
  });

  //   displayNumbers();
  //   calc = text((orangeList.length - 1) + " + 1 = " + orangeList.length, width/2-250, height/2);
  //   calcList.push(newOrange);
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
  // ground = image(groundImg, 0, height - 300);
}

function checkComparison(){
jQuery.get('scripts/main.js', function(data) {
    jsFile = data;
    // console.log(jsFile);
    console.log(jsFile.includes("(apple > orange)"));
});

fill('black');
text('TRUE', width/2, height/2);
}

function checkBoolean(){
jQuery.get('scripts/main.js', function(data) {
    jsFile = data;
    // console.log(jsFile);
    console.log(jsFile.includes("(apple == 3) || (orange == 4)"));

});
fill('black');
text('ALSO TRUE', width/2+50, height/2+50);
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
